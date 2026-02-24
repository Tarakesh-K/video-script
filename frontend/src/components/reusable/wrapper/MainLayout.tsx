import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  heading?: string;
  headingRequired?: boolean;
}

export default function MainLayout({ 
  children, 
  heading, 
  headingRequired = false
}: MainLayoutProps) {
  return (
    <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 py-6">
      {/* Step 1: Conditional Rendering of the Heading */}
      {headingRequired && heading && (
        <header className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            {heading}
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full" />
        </header>
      )}

      {/* Main Content Area */}
      <section className="w-full">
        {children}
      </section>
    </div>
  );
}