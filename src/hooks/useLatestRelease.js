import { useState, useEffect } from 'react';

export const useLatestRelease = (repoPath, fallbackUrl) => {
  const [data, setData] = useState({
    downloadUrl: fallbackUrl,
    version: '...',
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Only fetch if it's a github release download link
    const isGithubRelease = fallbackUrl && typeof fallbackUrl === 'string' && fallbackUrl.includes('github.com') && fallbackUrl.includes('/releases');
    
    if (!repoPath || !isGithubRelease) {
       setData(prev => ({ ...prev, isLoading: false }));
       return;
    }

    const fetchRelease = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repoPath}/releases/latest`);
        if (!response.ok) throw new Error('Failed to fetch release info');

        const release = await response.json();
        
        // Find suitable asset
        const asset = release.assets?.find(a => 
          a.name.endsWith('.exe') || 
          a.name.endsWith('.dmg') || 
          a.name.endsWith('.AppImage') ||
          a.name.endsWith('.apk') ||
          a.name.endsWith('.zip')
        );

        setData({
          downloadUrl: asset ? asset.browser_download_url : fallbackUrl,
          version: release.tag_name || '...',
          isLoading: false,
          error: null,
        });
      } catch (err) {
        setData(prev => ({ ...prev, isLoading: false, error: err.message }));
      }
    };

    fetchRelease();
  }, [repoPath, fallbackUrl]);

  return data;
};
