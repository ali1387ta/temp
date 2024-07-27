export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center pb-[72px]">
      <div className="position relative">
        <div className="absolute -bottom-5 -right-5 size-10 animate-spin rounded-full border-4 border-primary-500 border-e-transparent"></div>
        <div className="absolute -bottom-9 -right-9 size-[72px] animate-spin rounded-full border-4 border-primary-500 border-e-transparent [animation-direction:reverse]"></div>
        <div className="absolute -bottom-[52px] -right-[52px] size-[104px] animate-spin rounded-full border-4 border-primary-500 border-e-transparent"></div>
      </div>
    </div>
  );
}
