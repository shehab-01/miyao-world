interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  originalPrice: string;
  salePrice: string;
  discount: string;
  colors: string[];
  badge?: string;
  newBadge?: string;
  countdown?: string;
}

export function ProductCard({
  image,
  title,
  description,
  originalPrice,
  salePrice,
  discount,
  colors,
  badge,
  newBadge,
  countdown,
}: ProductCardProps) {
  return (
    <div className="relative bg-white">
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img src={image} alt={title} className="object-cover" style={{ width: '595px', height: '746px' }} />
        {countdown && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="inline">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
              <path d="M6 3v3l2 1" stroke="currentColor" strokeWidth="1" />
            </svg>
            {countdown}
          </div>
        )}
      </div>
      <div className="pt-3">
        <div className="text-sm mb-1">{title}</div>
        <div className="text-xs text-gray-600 mb-2">{description}</div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-400 line-through">{originalPrice}</span>
          <span className="text-sm font-medium">{salePrice}</span>
          <span className="text-xs text-red-500">{discount}</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="flex gap-1">
          {badge && (
            <span className="text-xs px-2 py-0.5 bg-black text-white rounded">{badge}</span>
          )}
          {newBadge && (
            <span className="text-xs px-2 py-0.5 border border-gray-300 text-gray-700 rounded">
              {newBadge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}