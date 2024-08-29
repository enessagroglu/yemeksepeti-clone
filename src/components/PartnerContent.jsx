import { useNavigate } from 'react-router-dom';

export default function PartnerContent() {
    const handleClick = () => {
        window.open("https://partner.yemeksepeti.com/s/?language=tr&countryIsoCode=TR", "_blank");
    };
  return (
    <>
      <div className="grid-container">
        <div className="partner-h1">
          Restoran veya Mahalle esnafı iş ortağımız olun
        </div>
      </div>
      <div className="partner-container"></div>
      <div className="partner-content">
        <div className="overlay-content">
          <div className="partner-content-h1">
            Hemen katılın, Yemeksepeti ile satışlarınızı katlamaya başlayın
          </div>
          <div className="partner-label">
            Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece kendi
            semtinizdekiler değil, artık çevre semtlerdeki binlerce kullanıcı da
            işletmenizden sipariş verebilecek. Bir ev, bir plaza, bir işyeri ya
            da üniversite kampüsü, hizmet vermek istediğiniz kim varsa artık
            müşteriniz.
          </div>

          <div className="partner-label">
            Gayet basit! Menünüzü listeliyoruz ve sipariş bilgilerini size
            ulaştırıyoruz. Sipariş teslimatını dilerseniz kendiniz
            yapabiliyorsunuz, dilerseniz Yemeksepeti sizin adınıza kullanıcıya
            ulaştırıyor.
          </div>

          <div className="partner-label">
            Hemen ailemize katılabilir ve muhteşem avantajlara sahip iş
            ortaklarımızdan biri olabilirsiniz. 
          </div>

          <div className="start">
              <button onClick={handleClick} className="startButton">Başlayalım</button>
            </div>
        </div>
      </div>
    </>
  );
}
