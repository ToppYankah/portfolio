export default function ({
  children,
  imageUrl,
}: {
  children: React.ReactNode;
  imageUrl: string;
  }) {
  return (
    <div className="flex justify-center gap-20 px-32 py-16 pb-32">
      <div className="flex flex-1 items-start justify-end max-[999px]:hidden">
        <img
          src={imageUrl}
          alt="Review mockup"
          className="max-h-[700px] w-[100%] rounded-2xl object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="max-w-[600px]">{children}</div>
      </div>
    </div>
  );
}
