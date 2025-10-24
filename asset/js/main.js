function _0x246d(_0x19d68b,_0x5e9b96){const _0x21b79c=_0x21b7();return _0x246d=function(_0x246da9,_0xdc2273){_0x246da9=_0x246da9-0xd3;let _0x5822dd=_0x21b79c[_0x246da9];return _0x5822dd;},_0x246d(_0x19d68b,_0x5e9b96);}function _0x21b7(){const _0x5013d8=['1395240vWHIOp','8133rpFscB','8459528dmPpHR','12345','30861945fblDXh','9610096MndWNj','12uunUEe','699204mhGnma','1851455Dhaord','282Ncwczf'];_0x21b7=function(){return _0x5013d8;};return _0x21b7();}const _0x1bbe05=_0x246d;(function(_0x46b654,_0x2373dd){const _0x45c3da=_0x246d,_0x5c40f5=_0x46b654();while(!![]){try{const _0x11ae2b=parseInt(_0x45c3da(0xd8))/0x1+-parseInt(_0x45c3da(0xda))/0x2*(parseInt(_0x45c3da(0xdc))/0x3)+parseInt(_0x45c3da(0xd7))/0x4*(parseInt(_0x45c3da(0xd9))/0x5)+parseInt(_0x45c3da(0xdb))/0x6+parseInt(_0x45c3da(0xd3))/0x7+parseInt(_0x45c3da(0xd6))/0x8+-parseInt(_0x45c3da(0xd5))/0x9;if(_0x11ae2b===_0x2373dd)break;else _0x5c40f5['push'](_0x5c40f5['shift']());}catch(_0x3ae044){_0x5c40f5['push'](_0x5c40f5['shift']());}}}(_0x21b7,0x9c803));const USERNAME='caca',PASSWORD=_0x1bbe05(0xd4);

// Fungsi menampilkan toast
function showToast(message) {
  const toast = document.getElementById('toast-failure');
  const toastMessage = document.getElementById('toast-message');

  toastMessage.textContent = message;
  toast.classList.remove('translate-x-[120%]', 'opacity-0');
  toast.classList.add('translate-x-0', 'opacity-100');

  setTimeout(() => {
    hideToast();
  }, 5000);
}

// Fungsi menyembunyikan toast
function hideToast() {
  const toast = document.getElementById('toast-failure');
  toast.classList.remove('translate-x-0', 'opacity-100');
  toast.classList.add('translate-x-[120%]', 'opacity-0');
}

function _0x268c(_0x179ce0,_0x518b0f){const _0x2f32b4=_0x2f32();return _0x268c=function(_0x268ce7,_0x3e7d05){_0x268ce7=_0x268ce7-0x16a;let _0x5cc570=_0x2f32b4[_0x268ce7];return _0x5cc570;},_0x268c(_0x179ce0,_0x518b0f);}(function(_0x472466,_0x3c4494){const _0x2dd209=_0x268c,_0x2dd90d=_0x472466();while(!![]){try{const _0xe86e17=-parseInt(_0x2dd209(0x178))/0x1+-parseInt(_0x2dd209(0x172))/0x2*(parseInt(_0x2dd209(0x16f))/0x3)+parseInt(_0x2dd209(0x176))/0x4*(parseInt(_0x2dd209(0x171))/0x5)+parseInt(_0x2dd209(0x170))/0x6+-parseInt(_0x2dd209(0x17b))/0x7+parseInt(_0x2dd209(0x17d))/0x8+-parseInt(_0x2dd209(0x16b))/0x9*(-parseInt(_0x2dd209(0x175))/0xa);if(_0xe86e17===_0x3c4494)break;else _0x2dd90d['push'](_0x2dd90d['shift']());}catch(_0x5781bc){_0x2dd90d['push'](_0x2dd90d['shift']());}}}(_0x2f32,0x7087a));function _0x2f32(){const _0x587b15=['1174dNOMtx','Username\x20dan\x20password\x20harus\x20diisi.','Username\x20atau\x20password\x20salah.','11750920bEGkBV','4bsEjBj','true','372651AQPeYX','location','value','5478235zUPnZc','getElementById','6559256xZRMmq','href','isLoggedIn','9rwEaWp','trim','setItem','username','4452vOMkKe','292656yDbpdZ','2217555HEYZZU'];_0x2f32=function(){return _0x587b15;};return _0x2f32();}function login(){const _0x180876=_0x268c,_0x38787c=document[_0x180876(0x17c)](_0x180876(0x16e))[_0x180876(0x17a)][_0x180876(0x16c)](),_0x5a8b30=document[_0x180876(0x17c)]('password')[_0x180876(0x17a)];if(!_0x38787c||!_0x5a8b30){showToast(_0x180876(0x173));return;}_0x38787c===USERNAME&&_0x5a8b30===PASSWORD?(sessionStorage['setItem']('username',_0x38787c),sessionStorage[_0x180876(0x16d)](_0x180876(0x16a),_0x180876(0x177)),window[_0x180876(0x179)][_0x180876(0x17e)]='dashboard.html'):showToast(_0x180876(0x174));}

// Tekan Enter = Login
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    login();
  }
});
