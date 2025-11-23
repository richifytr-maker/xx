import { Briefcase } from 'lucide-react';
import { useTheme } from '../ThemeContext';

function AboutTR() {
  const { isDark } = useTheme();

  return (
    <section className="min-h-screen pt-32 pb-20 relative z-10">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className={`text-5xl font-bold mb-12 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          hakkımda<span className="text-cyan-400">_</span>
        </h2>

        <div className={`backdrop-blur-md border rounded-3xl p-8 mb-12 shadow-2xl ${
          isDark
            ? 'bg-white/3 border-white/10'
            : 'bg-gray-800/3 border-gray-800/20'
        }`}>
          <div className="flex items-start gap-4 mb-6">
            <Briefcase className="text-cyan-400 mt-1 animate-slide-in stagger-1" size={24} />
            <div>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 animate-slide-in stagger-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>profesyonel biyografi</h3>

              <p className={`mb-4 leading-relaxed transition-colors duration-300 animate-slide-in stagger-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Merhaba, ben Mehmet Reşit Gül. 17 yaşında bir startup kurucusu ve AI otomasyon geliştiricisiyim.
              </p>

              <p className={`mb-4 leading-relaxed transition-colors duration-300 animate-slide-in stagger-3 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Türkiye'nin ilk ve tek yetenek değişim platformunu kurdum. İstanbul'da yaşıyorum ve şu anda 11. sınıf öğrencisiyim. Üç yıldır kesintisiz stajlarla sektör deneyimi kazanıyorum. Bunun yanında ürünler geliştiriyor, n8n tabanlı otomasyon sistemleri kuruyorum ve e-ticaret markalarının satışlarını artırmalarına, operasyonel yüklerini azaltmalarına ve günlük süreçlerini otomatikleştirmelerine yardımcı olan iş akışları tasarlıyorum.
              </p>

              <p className={`mb-4 leading-relaxed transition-colors duration-300 animate-slide-in stagger-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Çalışmalarım yapay zeka, no-code prototipleme ve bilişsel sinirbilimin kesişiminde yer alıyor. Kendi projelerim ve birlikte çalıştığım markalar için sipariş akışını, müşteri iletişimini, veri işlemeyi ve backend operasyonlarını hızlandıran küçük ama güçlü mikro sistemler inşa ediyorum.
              </p>

              <p className={`leading-relaxed transition-colors duration-300 animate-slide-in stagger-5 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Büyük laflar etmekle ilgilenmiyorum. İşe yarayan şeyler inşa etmekle ilgileniyorum.
                Felsefem basit:{' '}
                <span className="text-cyan-400 font-semibold">
                  inşa et, test et, değer sağla, iyileştir, tekrarla.
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutTR;
