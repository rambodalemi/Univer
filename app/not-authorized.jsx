"use client";

export default function NotAuthorized() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold text-red-500">
        شما اجازه دسترسی به این بخش را ندارید.
      </h1>
    </div>
  );
}
