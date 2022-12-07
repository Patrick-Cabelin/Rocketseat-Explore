
export function ambientSound() {


   const florest = new Audio("js/ambientSound/Floresta.wav") 
   const coffeeShop= new Audio("js/ambientSound/Cafeteria.wav")      
   const rain= new Audio("js/ambientSound/Chuva.wav")
   const bonfire= new Audio("js/ambientSound/Lareira.wav")   

   const song = {
      florest,
      coffeeShop,
      rain,
      bonfire,
   }

   function soundOff(soundOne,soundTwo, soundThree){
      soundOne.pause()
      soundTwo.pause()
      soundThree.pause()
   
      return 
   }

   function florestSong(){
      soundOff(song.bonfire,song.coffeeShop,song.rain)
      song.florest.play()
      song.florest.loop = true
   }

   function coffeeShopSong(){
      soundOff(song.rain, song.florest , song.bonfire )
      song.coffeeShop.play()
      song.coffeeShop.loop = true
   }

   function rainSong(){
      soundOff(song.florest, song.coffeeShop, song.bonfire )
      song.rain.play()
      song.rain.loop = true
   }

   function bonfireSong(){
      soundOff( song.rain, song.coffeeShop, song.florest)
      song.bonfire.play()
      song.bonfire.loop = true
   }

   return {
      florestSong,
      coffeeShopSong,
      rainSong,
      bonfireSong
   }
}