import React from 'react';
import { Link } from 'react-router-dom';
import type { PostMeta } from '@/types/blog-types'
import { useTranslation } from 'react-i18next';

type PostCardProps = PostMeta

const PostCard: React.FC<PostCardProps> = ({ slug, title, summary, date, image, category }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-md flex flex-col md:flex-row gap-4 hover:shadow-lg transition">
      {/* Картинка слева */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img
          src={typeof image === 'string' ? image : image?.id ? `http://localhost:8055/assets/${image.id}` : undefined}
          alt={title}
          
          className="w-full h-48 md:h-full object-cover rounded-lg"
        />
      </div>

      {/* Контент справа */}
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm mt-1">{date.slice(0, 10)} | {category}</p>
          <p className="text-gray-700 mt-2 line-clamp-3">{summary}</p>
        </div>
        <Link to={`/blog/${slug}`} className="self-end mt-4 md:mt-0 md:bottom-4 md:right-4 backdrop-blur-md bg-white/30 border border-white/40 text-sm text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-white/50 transition"
>
          {t('postcard.read_more')}
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
