interface ReviewCardProps {
  image: string;
  text: string;
  author: string;
  authorImage: string;
}

export function ReviewCard({ image, text, author, authorImage }: ReviewCardProps) {
  return (
    <div className="flex-shrink-0 bg-white rounded-lg overflow-hidden" style={{ width: '280px' }}>
      <div className="relative bg-gray-200 overflow-hidden" style={{ height: '380px' }}>
        <img src={image} alt={author} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white text-xs leading-relaxed">{text}</p>
          <p className="text-white/60 text-xs mt-1">@@@@@</p>
        </div>
      </div>
      <div className="p-3 flex items-center gap-2">
        <img src={authorImage} alt={author} className="w-8 h-8 rounded-full object-cover" />
        <span className="text-xs">{author}</span>
      </div>
    </div>
  );
}