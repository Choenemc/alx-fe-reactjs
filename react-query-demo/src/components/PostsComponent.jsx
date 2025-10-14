import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

// API service function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const PostsComponent = () => {
  const [showPosts, setShowPosts] = useState(true);
  
  // Using React Query to fetch posts
  const { 
    data: posts, 
    isLoading, 
    isError, 
    error,
    refetch,
    isFetching 
  } = useQuery({
    queryKey: ['posts'], // Unique key for caching
    queryFn: fetchPosts,
    enabled: showPosts,
    
        // ✅ Add the required configurations
    cacheTime: 1000 * 60 * 30, // 30 minutes - data stays in cache for 30 mins
    staleTime: 1000 * 60 * 5,  // 5 minutes - data is fresh for 5 mins
    refetchOnWindowFocus: false, // Prevent refetch when window gains focus
    keepPreviousData: true, // Keep previous data while fetching new data
    
    // Additional useful configurations
    retry: 2, // Retry failed requests 2 times
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  
  });


  const togglePosts = () => {
    setShowPosts(!showPosts);
  };

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div>Loading posts...</div>
        <button onClick={togglePosts} style={{ marginTop: '10px' }}>
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        <div>Error: {error.message}</div>
        <button onClick={refetch} style={{ margin: '10px' }}>
          Retry
        </button>
        <button onClick={togglePosts}>
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={refetch} 
          disabled={isFetching}
          style={{ 
            marginRight: '10px',
            padding: '8px 16px',
            backgroundColor: isFetching ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isFetching ? 'not-allowed' : 'pointer'
          }}
        >
          {isFetching ? 'Refreshing...' : 'Refresh Posts'}
        </button>
        
        <button 
          onClick={togglePosts}
          style={{
            padding: '8px 16px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>
        
        {isFetching && <span style={{ marginLeft: '10px' }}>Updating...</span>}
      </div>

      {showPosts && (
        <div>
          <h2>Posts ({posts?.length || 0})</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '20px',
            marginTop: '20px'
          }}>
            {posts?.slice(0, 12).map((post) => (
              <div 
                key={post.id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '16px',
                  backgroundColor: '#f9f9f9',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <h3 style={{ 
                  marginTop: 0, 
                  color: '#333',
                  fontSize: '1.1em'
                }}>
                  {post.title}
                </h3>
                <p style={{ 
                  color: '#666',
                  lineHeight: '1.5'
                }}>
                  {post.body.length > 100 
                    ? `${post.body.substring(0, 100)}...` 
                    : post.body
                  }
                </p>
                <div style={{ 
                  marginTop: '10px',
                  fontSize: '0.9em',
                  color: '#999'
                }}>
                  Post ID: {post.id} | User ID: {post.userId}
                </div>
              </div>
            ))}
          </div>
          
          {posts && posts.length > 12 && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p>Showing 12 of {posts.length} posts</p>
            </div>
          )}
        </div>
      )}
      
      {!showPosts && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Posts are hidden. Click "Show Posts" to display them again.</p>
          <p style={{ fontSize: '0.9em', color: '#666', marginTop: '10px' }}>
            Note: When you show posts again, they will load instantly from cache!
          </p>
        </div>
      )}
    </div>
  );
};

export default PostsComponent;