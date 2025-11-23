import { useTheme } from '../ThemeContext';

function ExperienceTR() {
  const { isDark } = useTheme();

  return (
    <section className="min-h-screen pt-32 pb-20 relative z-10">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className={`text-5xl font-bold mb-12 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          deneyim<span className="text-cyan-400">_</span>
        </h2>
        <div className="space-y-6">
          <div className={`backdrop-blur-md border rounded-3xl p-8 shadow-2xl hover:transition-all transition-all duration-300 animate-slide-in stagger-1 ${
            isDark
              ? 'bg-white/3 border-white/10 hover:bg-white/5'
              : 'bg-gray-800/3 border-gray-800/20 hover:bg-gray-800/5'
          }`}>
            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Takazade</h3>
            <p className="text-cyan-400 mb-4">Kurucu & Yapımcı</p>
            <p className={`leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Türkiye'nin ilk yetenek değişim platformunu sıfırdan tasarlayıp inşa ettim. Fon yok, ekip yok. Ürünü, mantığı ve lansmانı kendim hallettim. Platform, kullanıcıların yeteneklerini herhangi bir gerçek kaynağı değiş tokuş eder gibi takas etmelerine olanak sağlıyor.
            </p>
          </div>
          <div className={`backdrop-blur-md border rounded-3xl p-8 shadow-2xl hover:transition-all transition-all duration-300 animate-slide-in stagger-2 ${
            isDark
              ? 'bg-white/3 border-white/10 hover:bg-white/5'
              : 'bg-gray-800/3 border-gray-800/20 hover:bg-gray-800/5'
          }`}>
            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>AI Otomasyon Projeleri</h3>
            <p className="text-cyan-400 mb-4">Bağımsız Geliştirici</p>
            <p className={`leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              E-ticaret markaları için n8n tabanlı otomasyon sistemleri geliştiriyorum. Bunlar sipariş akışı otomasyonu, müşteri iletişim iş akışları, veri işleme hatları ve backend operasyon araçlarını içeriyor. Her proje aynı hedefe odaklanıyor: manuel iş yükünü azaltmak ve günlük operasyonları hızlandırmak.
            </p>
          </div>
          <div className={`backdrop-blur-md border rounded-3xl p-8 shadow-2xl hover:transition-all transition-all duration-300 animate-slide-in stagger-3 ${
            isDark
              ? 'bg-white/3 border-white/10 hover:bg-white/5'
              : 'bg-gray-800/3 border-gray-800/20 hover:bg-gray-800/5'
          }`}>
            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Ürün Geliştirme</h3>
            <p className="text-cyan-400 mb-4">Uygulamalı, Çok Rolü Yaklaşım</p>
            <p className={`leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Ürünleri fikirden canlı versiyona taşıyorum. Tasarımı, mantığı, prototiplemeyi, iterasyonu ve dağıtımı kendim hallediyorum. İş akışım basit: hızlı inşa et, hemen test et, sürekli iyileştir, tekrar yayınla.
            </p>
          </div>
          <div className={`backdrop-blur-md border rounded-3xl p-8 shadow-2xl hover:transition-all transition-all duration-300 animate-slide-in stagger-4 ${
            isDark
              ? 'bg-white/3 border-white/10 hover:bg-white/5'
              : 'bg-gray-800/3 border-gray-800/20 hover:bg-gray-800/5'
          }`}>
            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Nörobilim Araştırması</h3>
            <p className="text-cyan-400 mb-4">Bağımsız Araştırmacı</p>
            <p className={`leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Yapay zekanın insan karar verme hızını ve bilişsel iş akışlarını nasıl etkilediğini inceliyorum. Son çalışmalarım, AI destekli görevlerin zihinsel yükümüzü, dikkat desenlerimizi ve sürecin bir kısmı otomatikleştirildiğinde beynin problem çözmeyi nasıl ele aldığını değiştirdiğine odaklanıyor.
              Erken aşama araştırmalar yayınlıyor, deneysel fikirleri araştırıyor ve AI sistemleri tarafından desteklendiğinde insan muhakemesinin nasıl adapte olduğunu analiz ediyorum. Şu anki ilgi alanım, AI destekli karar vermenin prefrontal işleme hızı üzerindeki etkisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ExperienceTR;
