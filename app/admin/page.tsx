'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    date: new Date().toISOString().split('T')[0],
    excerpt: '',
    content: '',
  });
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      fetchPosts();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        localStorage.setItem('adminToken', data.token);
        setIsAuthenticated(true);
        fetchPosts();
      } else {
        setMessage('Invalid password');
      }
    } catch (error) {
      setMessage('Login failed');
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Post created successfully!');
        setShowCreateForm(false);
        resetForm();
        fetchPosts();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(data.error || 'Failed to create post');
      }
    } catch (error) {
      setMessage('Failed to create post');
    }
  };

  const handleUpdatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/blog', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Post updated successfully!');
        setEditingPost(null);
        resetForm();
        fetchPosts();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(data.error || 'Failed to update post');
      }
    } catch (error) {
      setMessage('Failed to update post');
    }
  };

  const handleDeletePost = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`/api/blog?slug=${slug}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Post deleted successfully!');
        fetchPosts();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(data.error || 'Failed to delete post');
      }
    } catch (error) {
      setMessage('Failed to delete post');
    }
  };

  const loadPostForEdit = async (slug: string) => {
    try {
      const response = await fetch(`/api/blog/${slug}`);
      const post = await response.json();
      
      setFormData({
        slug: post.slug,
        title: post.title,
        date: post.date,
        excerpt: post.excerpt,
        content: post.content || '',
      });
      setEditingPost(slug);
      setShowCreateForm(true);
    } catch (error) {
      setMessage('Failed to load post');
    }
  };

  const resetForm = () => {
    setFormData({
      slug: '',
      title: '',
      date: new Date().toISOString().split('T')[0],
      excerpt: '',
      content: '',
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setToken('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 border border-slate-300 rounded-md mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          {message && <p className="mt-4 text-red-600 text-sm">{message}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/')}
              className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700"
            >
              View Site
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        {message && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
            {message}
          </div>
        )}

        <div className="mb-8">
          <button
            onClick={() => {
              setShowCreateForm(!showCreateForm);
              setEditingPost(null);
              resetForm();
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {showCreateForm ? 'Cancel' : 'Create New Post'}
          </button>
        </div>

        {showCreateForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {editingPost ? 'Edit Post' : 'Create New Post'}
            </h2>
            <form onSubmit={editingPost ? handleUpdatePost : handleCreatePost}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="post-slug"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md"
                  required
                  disabled={!!editingPost}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Post Title"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Excerpt</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief description..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-md h-24"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Content (Markdown)</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write your post content in markdown..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-md h-64 font-mono text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {editingPost ? 'Update Post' : 'Create Post'}
              </button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">All Posts</h2>
          </div>
          <div className="divide-y">
            {posts.length === 0 ? (
              <p className="p-6 text-slate-600">No posts yet. Create your first post!</p>
            ) : (
              posts.map((post) => (
                <div key={post.slug} className="p-6 flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-slate-600 text-sm mb-2">{post.date}</p>
                    <p className="text-slate-700">{post.excerpt}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => loadPostForEdit(post.slug)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.slug)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
