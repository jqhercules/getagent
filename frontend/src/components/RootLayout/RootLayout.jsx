const RootLayout = ({ children }) => {
  return (
    <div className="my-20 max-w-5xl grid place-items-center mx-8 min-[1100px]:mx-auto">
      <main className="w-full">{children}</main>
    </div>
  );
};

export default RootLayout;
