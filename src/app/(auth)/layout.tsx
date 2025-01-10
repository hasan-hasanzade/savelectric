import AuthHeader from "../components/AuthHeader/AuthHeader";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-auth-mob xl:bg-auth bg-cover bg-no-repeat bg-center xs:bg-left">
      <AuthHeader />
      <main className="flex mt-[-100px] xl:mt-0 flex-1 justify-center items-center">
        {children}
      </main>
    </div>
  );
}
