import { useTheme } from '../ThemeContext';

function Home() {
  const { isDark } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="text-center relative z-10">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl mb-4 font-medium transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>hi, i'm mehmet!</h2>
        <p className={`text-sm sm:text-base mb-4 transition-colors duration-300 ${
          isDark ? 'text-gray-200' : 'text-gray-700'
        }`}>
          17 y.o. startup founder & AI automation builder
        </p>
      </div>
    </section>
  );
}
export default Home;