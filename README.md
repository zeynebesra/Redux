"# Redux"

Redux’la birlikte uygulamanız dahilinde hem veri yönetimini yapabilir hem de ui tarafını yönetebilirsiniz.

Immutability, react router, redux toolkit

_KONU ANLATIMI_

State management(Durum yönetimi) nedir?

State , uygulamalarımızdaki bileşenlerin her birinin o anda sahip olduğu özellikler ve bilgilerdir. Bu özellik ve bilgilerin değişkenlik göstermesi state denen kavramı ortaya çıkarıyor. Örneğin bir checkbox’ın işaretli olup olmaması bir durumdur,bir bilgidir.

Açık kaynak kodlu bir state management kütüphanesidir,neredeyse en çok kullanılanıdır.

State’i merkezileştirip uygulamanın karmaşıklığını azaltarak daha yönetilebilir bir state yapmaya çalışır. Redux, reactın başında olan biri (dan abramov) tarafından yaratılır. React ile bağımsız bir kütüphanedir.

_Redux’ta temel kavramlar_

_Action:_ Bir javascript objesidir. Store’da hangi state’in değişeceği bilgisini(type) ve state verisini taşır(payload).

Action’ları daha kullanışlı yapmak için için çoğu zaman Action Creator’lardan faydalanırız. Action Creator’lar birer arrow function’lardır. Sadece değişen payload kısmını parametre alıp bir action geri döner. Type’lar genelde değişmeyen ,sadece yönlendirici sabitler olduğu için ayrı bir dosyada tutulur(actionTypes).

_Reducer:_ State ve action’ı parametre alan ve yeni state’i dönen pure bir fonksiyondur. Action’ın type’ına göre state’i değiştirir ve yeni state’i geri döner. Mutlaka state’in güncel bir kopyası geri dönmesi gerekiyor. Aksi halde, componentler kendini render etmez.Bunu yapmaktaki amaç state’in referansını değiştirmektir. Bunun için Object.assign() veya Object spread opretaor yöntemlerini kullanabiliriz. Program başlangıcında state’in undifined olmaması için başlangıç değerini de vermeyi unutmamalıyız.

_Store:_ State’in tutulduğu yerdir. Store’u oluşturmak için createStore fonksiyonunu kullanırız. Parametre olarak reducer’ları alır. Reducer’lar birden fazla olduğu zaman ,ki genellikle öyle olur. Bunları bir arada göndermek için combineReducer fonksiyonunu kullanırız. Redux bizim için bu reducer’ları ortak bir objede tutarak erişimi ve kullanımı kolay bir hale getirir.Gerçi kendisi için yapıyor,biz sadece kullanıyoruz.
Geriye üç tane fonksiyon döner.

-dispatch

-getState

-subscribe

_dispatch:_ Action’ı parametre alarak reducer’ı tetikler. Bunun sonucunda state değiştirilir. Bu fonksiyon her çalıştırıldığında abone olan tüm componen’tler tekrar render edilir.Tabii ki state değiştikten sonra ,render işlemi yapılır.

_getState:_ Mevcut state’i döner.
_subscribe:_ Component’ler bu fonksiyonu kullanarak Store’a abone olurlar. Store ,abone olan tüm componentleri içinde saklar. Parametre olarak ,component’in state’e bağlı olduğu, yani state her değiştiğinde render olacak fonksiyonu alır, bu fonksiyonun mutlaka getState fonksiyonunu kullanması önemlidir. Aslında buradaki amaç getState çalıştırmaktır. Bu sayede view’de, state’in değiştiğini görebiliriz. Aksi halde state değişir ama view’e bu yansımaz.

_Çalışma Mantığı_

1.Kullanıcı view’de ,action’u tetikleyecek bir işlem yapar.

2.Dispatch, gelen action’ı store’da mevcut state ile birlikte reducer’a parametre geçer.

3.Bu işlem sonucunda state’in ilgili kısımları değişir ve yeni bir state oluşur. Burada reducer için Object.assign() veya Object spread opretaor yöntemlerinin önemi anlaşılıyor ,eğer state birden fazla veri tutuyorsa.

4.State güncellendiği gibi abone olan tüm component’ler tekrar render edilir.

5.En sonunda bu state tekrar view’e yansır.
