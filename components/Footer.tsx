export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-center py-6 mt-8">
      
      <div className="w-full h-[2px] bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-4"></div>

      <p className="font-[Poppins] text-sm md:text-base">
        © {new Date().getFullYear()} <span className="text-teal-400 font-[Great_Vibes]">Saniya Khan</span>. All Rights Reserved.
      </p>
    </footer>
  );
}
