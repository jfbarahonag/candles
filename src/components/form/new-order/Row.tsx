export default function Row({
  children,
  last,
}: {
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <>
      <div className={`flex flex-wrap`}>
        {children}
      </div>
      <hr className={`${last === true ? "my-2" : "my-6"}`} />
    </>
  );
}
