const  { MessageType }  =  require ( '@adiwajshing/baileys' )
const  { pegatina }  =  require ( '../lib/pegatina' )
const  uploadFile  =  require ( '../lib/uploadFile' )
const  uploadImage  =  require ( '../lib/uploadImage' )
dejar  { webp2png }  =  requerir ( '../lib/webp2mp4' )
let  handler  =  async  ( m ,  { conn , args , usedPrefix , command } )  =>  {
let  stiker  =  falso
prueba  {
Sea  q  =  m . citado ? m _ citado : m
let  mime  =  ( q . mensaje  ||  q ) . mimetipo  ||  ''
if  ( / webp | imagen | video / g . prueba ( mimo ) )  {
if  ( / video / g . prueba ( mímica ) )  if  ( ( q . msg  ||  q ) . segundos  >  11 )  devuelve  m . respuesta ( '*⚠ El video debe ser de máximo 7 segundos*' )
let  img  =  esperar  q . descargar ( )
if  ( ! img )  throw  `*[ ⚠ ] ️Error vuelva a intentarlo, recuerde responder a la imagen, video o gif con ${ usedPrefix  +  command } *`
dejar  salir
prueba  {
if  ( / webp / g . test ( mime ) )  out  =  esperar  webp2png ( img )
else  if  ( / image / g . test ( mime ) )  out  =  esperar  uploadImage ( img )
else  if  ( / video / g . test ( mime ) )  out  =  esperar  uploadFile ( img )
stiker  =  etiqueta en espera  ( falso , fuera , global . nombre del paquete , global . autor )   
}  atrapar  ( e )  {
consola _ error ( e )
stiker  =  etiqueta en espera  ( img , false , global . packname , global . autor )   
} }  si  no  ( argumentos [ 0 ] )  {
if  ( isUrl ( args [ 0 ] ) )  stiker  =  await  sticker ( false ,  args [ 0 ] ,  global . packname ,  global . autor )
de lo contrario,  devuelve  m . Responder ( '*[ ⚠ ] Link (enlace) invalido...*\n*[❗] Inserte un link de una imagen de google en terminación .jpg o .png o .gif*\n*Ejemplo:*\n* #s https://i.pinimg.com/originals/2f/73/98/2f73987ee094e909771abdd00d45d75b.gif*' )
} }  atrapar  ( e )  {
consola _ error ( e )
if  ( Buffer . isBuffer ( e ) )  adhesivo  =  e
}  finalmente  {
si  ( adhesivo )  conectado . sendMessage ( m . chat ,  stiker ,  MessageType . sticker ,  {
citado : m } )
else  throw  `*[ ⚠ ] ️La conversión ha fallado..*\n*[❗] Vuelva a intentarlo, responda a una imagen, video o gif con ${ usedPrefix  +  command } *\n*[❗] Si el video rebasa los 7 segundos pueden dar problemas al crear el sticker*` } }
manejador _ comando  =  / ^ s ( tic?ker ) ? ( gif ) ? ( wm ) ? $ / yo
módulo _ exportaciones  =  controlador
const  esUrl  =  ( texto )  =>  {
devolver  texto . coincidencia ( nueva  expresión regular ( / https?: \/ \/ ​​( www \. ) ? [ -a-zA-Z0-9@:%._+~#= ] { 1,256 } \. [ a-zA-Z0- 9() ] { 1,6 } \b ( [ -a-zA-Z0-9()@:%_+.~#?&/= ] * ) ( jpe?g | gif | png ) / ,  ' gi' ) ) }
