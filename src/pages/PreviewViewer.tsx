import { Link, useParams, Navigate } from 'react-router-dom';

export const PreviewViewer = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/" replace />;

  const previewUrl = `/preview/${slug}`;

  return (
    <div className="fixed inset-0 flex flex-col bg-[#0a0a0a]">
      {/* Topbar */}
      <header className="shrink-0 h-12 bg-[#0a0a0a] border-b border-white/10 flex items-center justify-between px-3 sm:px-4 gap-3">
        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white text-xs font-medium transition-colors"
        >
          <span className="text-base leading-none">←</span>
          <span className="hidden sm:inline">Sluiten</span>
        </Link>

        <div className="flex items-center gap-2 min-w-0 flex-1 justify-center">
          <span className="text-xs text-white/30 hidden sm:inline">Preview:</span>
          <code className="text-xs text-white/60 truncate font-mono">{previewUrl}</code>
        </div>

        <a
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white text-black hover:bg-white/90 text-xs font-medium transition-colors"
        >
          <span className="hidden sm:inline">Nieuw tabblad</span>
          <span className="sm:hidden">↗</span>
          <span className="hidden sm:inline text-sm leading-none">↗</span>
        </a>
      </header>

      {/* Iframe */}
      <iframe
        key={slug}
        src={previewUrl}
        title={`Preview ${slug}`}
        className="flex-1 w-full border-0 bg-white"
      />
    </div>
  );
};
