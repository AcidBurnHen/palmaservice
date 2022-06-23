import { galleryAlbums } from '@/helpers/GalleryData';

import Image from 'next/image';

const AlbumSelector = ({ setAlbum }) => {
  const selectAlbum = (album) => {
    setAlbum(album);
  };

  const boats = galleryAlbums.map((album, index) => {
    const name = album.boatName;
    const img = album.boatImgs[0];
    return (
      <div
        onClick={() => selectAlbum(album)}
        className='album-selector__container'
        key={index}>
        <p className='album-selector__title'>{name}</p>
        <Image
          className='album-selector__image'
          src={img.src}
          alt={img.alt}
          height={80}
          width={100}
          objectFit='contain'
        />
      </div>
    );
  });

  return <div className='album-selector'>{boats}</div>;
};

export default AlbumSelector;
