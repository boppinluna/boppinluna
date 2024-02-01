var images = [
    'LHlnm1R.png',
    'rwRzJ14.jpg', 'DDLuMXM.png', 'cq3IynI.jpg', 'HzieDba.jpg', 'pYA8fRa.jpg',
    'm7VEGQ2.jpg', 'hoGtxLr.jpg', 'Hd6mDRV.jpg', '4Vf90NL.jpg', 'YyFbQLh.jpg',
    'XjNNedB.jpg', 'DvkXAlO.jpg', 'WAo642t.jpg', 'vzsX9MK.jpg', 'w90x5s3.jpg',
    'FCy2SNR.jpg', '6cIx6jN.jpg', 'fdBM2ZD.jpg', 'OzvySyW.jpg', 'yBmjLlZ.jpg',
    'PeNbgzp.jpg', 'H2FqGd6.jpg', 'a8z51t7.jpg', 'mohhFJn.jpg', 'X5eo1E5.jpg',
    'zFsSpG0.jpg', 'UYuqCsu.jpg', 'XgnhGQw.jpg', 'PykSPUv.jpg', 'jDplrdq.jpg',
    'Q2H6nAv.jpg', 'qGjoZbU.png', 'Vdrtdfc.png', 'Idje39i.png', 'ZnO9wRz.png',
    'X1vWK9t.png', 'AgHvkHG.png', 'yGVrxVO.png', 'iMIkYcE.png', 'WH0aG1W.png',
    'bFVRvi6.png', 'adbXeG5.png', 'FqifKkM.png', '3CqvX78.png', 'FlgjQga.png',
    'oKAdQhu.png', 'XL9rJwn.png', '85ohSjn.png', '3DUuww4.png', '2F0BYVX.png',
    'eWYrc5I.png', 'ojYAaF6.png', 'SHf0RXZ.png', 'aHEZJle.png', 'JQD6Dg5.png',
    'xN7oZ2L.png', 'fCsX3dv.png', 'nlhXnza.png', 'P00ghPy.png', '9UvZUKY.png',
    'SDNHUs1.png', 'SARdEuw.png', 'HAXZddl.png', '4OsxBnm.png', 'FoGk8SV.png',
    'EOYqg0U.png', 'AFOJxd6.png', '35hChF7.png', 'z4qGt6P.png', 'PvtXchk.png',
    'lXHjBrA.png', 'VakOwif.png', 'fDy903k.png', 'YLUIUdf.png', '9w2gQvY.png',
    'nhOEycJ.png', 'fhMkOgR.png', '3rOXhRz.png', '9FHaigm.png', 'xR9fwLr.png',
    'LbojF9u.png', 'ikLFiVh.png', 'xaIZfkM.png', 'Yqi1oqb.png', 'PpfJ9ec.png',
    'KDGEKm5.png', 'xazFGlN.png', 'VKpv8Bu.png', 'T8DX2bx.png', 'wOuMTPk.png',
    'tUaw9qo.png', 'dZ0GrID.png', 'pdRk5iV.png', 'FJ9q6D3.png', 'HfY4wri.png'
];
var image = images[Math.floor(Math.random() * images.length)];
$('body').css({
    'background-image' : 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://i.imgur.com/' + image + '")',
});

var sakura = new Sakura('body', {
    fallSpeed: 1
});