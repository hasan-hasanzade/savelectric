import Header from "../components/Header/Header";

export default function MainLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="h-full flex bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] max-w-[1280px] w-full mx-auto flex-1">
          {children}
        </main>
      </div>
    );
  }
  
