function PersonImage({ src }: {
  src: string;
}) {
  return (
    <img src={src} height='24' />
  );
}

export default PersonImage;