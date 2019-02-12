var map;
            var marker1;
            var marker2;
            var rectangle;


            function initMap() {
                var mapOptions = {
                    zoom: 11,
                    center: new google.maps.LatLng(28.4595, 77.0266)
                };
                map = new google.maps.Map(document.getElementById('map'),mapOptions);
                marker1 = new google.maps.Marker({
                    position: new google.maps.LatLng(28.343115132, 76.8536989),
                    map: map,
                    draggable: true,
                    title: 'marker1'
                });
 
                marker2 = new google.maps.Marker({
                    position: new google.maps.LatLng(28.543048, 77.14079),
                    map: map,
                    draggable: true,
                    title: 'marker2'
                });

                var coordinates = [
                    {lng: 76.8559524, lat: 28.400185}, {lng: 76.8696144, lat: 28.3854157}, {lng: 76.8796311, lat: 28.3957333}, {lng: 76.8877189, lat:  28.4035728}, {lng:76.8925248, lat:  28.4090852}, {lng: 76.8928393, lat:  28.4087934}, {lng: 76.893404, lat:28.4080159}, {lng: 76.8936004, lat:28.4068713}, {lng:76.8942142, lat:28.4055972}, {lng:76.8944107, lat:28.403891}, {lng: 76.8948035, lat: 28.4025736}, {lng:76.8951718, lat:28.4016018}, {lng:76.8962766, lat:28.4008891}, {lng:76.8997631, lat:28.399442}, {lng:76.901359, lat:28.3990533}, {lng:76.9035196, lat:28.3987293}, {lng:76.9066622, lat:28.3984054}, {lng:76.9072269, lat:28.3986213}, {lng:76.9186995, lat:28.3909024}, {lng:76.9214918, lat:28.3909756}, {lng:76.9216637, lat:28.389442}, {lng:76.9217213, lat:28.3885181}, {lng:76.9217923, lat:28.3871392}, {lng:76.9260805, lat:28.3841303}, {lng:76.9448805, lat:28.3725251}, {lng:76.9471551, lat: 28.3716597}, {lng:76.948573, lat:28.3709873}, {lng:76.9515171, lat:28.3693086}, {lng:76.9522659, lat:28.3687944}, {lng:76.9516175, lat:28.3671617}, {lng:76.9516565, lat:28.3655348}, {lng:76.9523001, lat:28.3651476}, {lng:76.9522603, lat:28.3643684}, {lng:76.9523877, lat:28.3622109}, {lng:76.9527433, lat:28.3614269}, {lng:76.9532313, lat:28.3605505}, {lng:76.9537915, lat:28.3600506}, {lng:76.9542382, lat:28.3594186}, {lng:76.9545178, lat:28.3591334}, {lng:76.9552684, lat:28.3585701}, {lng:76.9571494, lat:28.3570005}, {lng:76.9561195, lat:28.3569945}, {lng:76.9561191, lat:28.3564473}, {lng:76.9573246, lat:28.3565013}, {lng:76.9573267, lat:28.356607}, {lng:76.9573286, lat:28.3610604}, {lng:76.9638667, lat:28.3610535}, {lng:76.9642001, lat:28.3610529}, {lng:76.9651835, lat:28.3615682}, {lng:76.9655589, lat:28.3618005}, {lng:76.9659736, lat:28.3620599}, {lng:76.9663627, lat:28.3620514}, {lng:76.9671707, lat:28.3592872}, {lng:76.9674586, lat:28.3587191}, {lng:76.9862863, lat:28.3472344}, {lng:77.0043215, lat:28.3882571}, {lng:77.015501, lat:28.3830638}, {lng:77.0144066, lat:28.3799885}, {lng:77.0220731, lat:28.3737851}, {lng:77.0255131, lat:28.3775172}, {lng:77.0361475, lat:28.3681112}, {lng:77.0471875, lat:28.3583116}, {lng:77.1188819, lat:28.3701088}, {lng:77.1146418, lat:28.3983352}, {lng:77.138683, lat:28.4072441}, {lng:77.1287009, lat:28.4404645}, {lng:77.1277292, lat:28.4428335}, {lng:77.1253919, lat:28.4502107}, {lng:77.1242593, lat:28.4510201}, {lng:77.1238974, lat:28.4550376}, {lng:77.1234764, lat:28.4597104}, {lng:77.1200235, lat:28.4627232}, {lng:77.116455, lat:28.4672235}, {lng:77.1124725, lat:28.4731841}, {lng:77.1141826, lat:28.4735236}, {lng:77.1150614, lat:28.4815648}, {lng:77.1167211, lat:28.4850054}, {lng:77.1176759, lat:28.4869846}, {lng:77.119507, lat:28.495139}, {lng:77.1124785, lat:28.4984532}, {lng:77.1101397, lat:28.4993961}, {lng:77.1053975, lat:28.5013384}, {lng:77.1037667, lat:28.5024887}, {lng:77.1023081, lat:28.5031016}, {lng:77.1000336, lat:28.5038653}, {lng:77.0976518, lat:28.5048552}, {lng:77.0957528, lat:28.5070803}, {lng:77.0986588, lat:28.5114068}, {lng:77.0939182, lat:28.5138682}, {lng:77.0932384, lat:28.5140471}, {lng:77.0925943, lat:28.5142311}, {lng:77.0859574, lat:28.5161025}, {lng:77.0846262, lat:28.5164992}, {lng:77.0840906, lat:28.5166587}, {lng:77.0830606, lat:28.5169698}, {lng:77.0827494, lat:28.5170898}, {lng:77.0804111, lat:28.5180224}, {lng:77.0792948, lat:28.5182048}, {lng:77.0792318, lat:28.5182128}, {lng:77.0774387, lat:28.5184405}, {lng:77.075014, lat:28.5187138}, {lng:77.0747744, lat:28.5188088}, {lng:77.0744668, lat:28.5189307}, {lng:77.073365, lat:28.5195071}, {lng:77.0723002, lat:28.5202589}, {lng:77.0722213, lat:28.5201457}, {lng:77.0720942, lat:28.5193619}, {lng:77.0713662, lat:28.5175938}, {lng:77.0709886, lat:28.5170499}, {lng:77.0688651, lat:28.5145822}, {lng:77.067616, lat:28.5129745}, {lng:77.0671624, lat:28.5119289}, {lng:77.0653494, lat:28.5125045}, {lng:77.0645251, lat:28.5126891}, {lng:77.0633996, lat:28.5126665}, {lng:77.0612165, lat:28.512224}, {lng:77.0606606, lat:28.5122555}, {lng:77.0577011, lat:28.5127924}, {lng:77.0575428, lat:28.5128211}, {lng:77.0543531, lat:28.5143512}, {lng:77.0491721, lat:28.5160453}, {lng:77.0462065, lat:28.5256984}, {lng:77.0417144, lat:28.5260711}, {lng:77.0356349, lat:28.5292442}, {lng:77.0356102, lat:28.5292571}, {lng:77.0340499, lat:28.5300715}, {lng:77.0321199, lat:28.5310788}, {lng:77.0298669, lat:28.5316849}, {lng:77.0297824, lat:28.5317014}, {lng:77.0245904, lat:28.5327132}, {lng:77.0232547, lat:28.5335616}, {lng:77.0219253, lat:28.5347748}, {lng:77.0217025, lat:28.5349596}, {lng:77.0197006, lat:28.536218}, {lng:77.0174236, lat:28.5399982}, {lng:77.0134571, lat:28.5405156}, {lng:77.0128497,lat: 28.5402697}, {lng:77.0122093, lat:28.5400104}, {lng:77.0101934, lat:28.5402687}, {lng:77.0096859, lat:28.539869}, {lng:77.0086334, lat:28.5403299}, {lng:77.0076539, lat:28.5397729}, {lng:77.0054602, lat:28.5394958}, {lng:77.0043849, lat:28.537795}, {lng:77.0016644, lat:28.5334918}, {lng:77.0013296, lat:28.5309864}, {lng:77.0016511, lat:28.5308084}, {lng:77.0050118, lat:28.528947}, {lng:77.0084757, lat:28.5270284}, {lng:77.0096001, lat:28.526641}, {lng:77.0105771, lat:28.5257745}, {lng:77.0109605, lat:28.5254514}, {lng:77.0146291, lat:28.5243485}, {lng:77.0169637, lat:28.5210774}, {lng:77.0144723, lat:28.518757}, {lng:77.012884, lat:28.5172777}, {lng:77.0125538, lat:28.5169701}, {lng:77.0116413, lat:28.5161518}, {lng:77.0108262, lat:28.5154209}, {lng:77.0105264, lat:28.5151521}, {lng:77.010493, lat:28.5151221}, {lng:77.0100507, lat:28.5147255}, {lng:77.0085304, lat:28.5151415}, {lng:77.0070407, lat:28.515549}, {lng:77.0067265, lat:28.515635}, {lng:77.0059192, lat:28.5158559}, {lng:77.0027227, lat:28.5172931}, {lng:76.9999924, lat:28.5179713}, {lng:76.9990215, lat:28.5184832}, {lng:76.9968081, lat:28.5197124}, {lng:76.9959691, lat:28.5180316}, {lng:76.9953859, lat:28.5171445}, {lng:76.9945276, lat:28.5176083}, {lng:76.9909463, lat:28.5135677}, {lng:76.983382, lat:28.5169891}, {lng:76.9832794, lat:28.5170355}, {lng:76.9812139, lat:28.5191174}, {lng:76.9802327, lat:28.5198029}, {lng:76.9783615, lat:28.5212481}, {lng:76.9760102, lat:28.5189385}, {lng:76.9706299, lat:28.515795}, {lng:76.9620491, lat:28.5115276}, {lng:76.9648243, lat:28.509661}, {lng:76.9762078, lat:28.4984432}, {lng:76.9720448, lat:28.4914468}, {lng:76.9692444, lat:28.4860356}, {lng:76.9665067, lat:28.4806004}, {lng:76.9654443, lat:28.4787172}, {lng:76.9642444, lat:28.4765902}, {lng:76.9607315, lat:28.4705733}, {lng:76.9581786, lat:28.468231}, {lng:76.9537542, lat:28.4642338}, {lng:76.9453408, lat:28.4568557}, {lng:76.9465866, lat:28.4442302}, {lng:76.9069895, lat:28.4252864}, {lng:76.8671319, lat:28.4182734}, {lng:76.869179, lat:28.4060588}, {lng:76.8559524, lat:28.400185}
                    ];
                var boundary = new google.maps.Polygon({
                        paths: coordinates,
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: '#FF0000',
                        fillOpacity: 0.35
                });
                 boundary.setMap(map);

                /*rectangle with marker positions*/
                rectangle = new google.maps.Rectangle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: map,
                    bounds: new google.maps.LatLngBounds(
                    marker1.getPosition(),
                    marker2.getPosition())
                });

            var leftSideDist = Math.round((marker2.getPosition().lng() - marker1.getPosition().lng()) * 10000) / 100;
            var belowSideDist = Math.round((marker2.getPosition().lat() - marker1.getPosition().lat()) * 10000) / 100;
            
            //Making grid
            var rectangleLat = [];
            var rectangleLng = [];
            for (x in rectangleLng) {
                for (y in rectangleLng[x]) {
                if (rectangleLng[x][y].setMap) {
                    rectangleLng[x][y].setMap(null)
                    rectangleLng[x][y] = null;
                }
                }
            }
            var leftSideDist = marker2.getPosition().lng() - marker1.getPosition().lng();
            var belowSideDist = marker2.getPosition().lat() - marker1.getPosition().lat();

            var dividerLat = 15;
            var dividerLng = 15; 
            var excLat = belowSideDist / dividerLat;
            var excLng = leftSideDist / dividerLng;

            var m1Lat = marker1.getPosition().lat();
            var m1Lng = marker1.getPosition().lng();
            var m2Lat = marker2.getPosition().lat();
            var m2Lng = marker2.getPosition().lng();

            for (var i = 0; i < dividerLat; i++) {
                if (!rectangleLng[i]) rectangleLng[i] = [];
                for (var j = 0; j < dividerLng; j++) {
                    if (!rectangleLng[i][j]) 
                        rectangleLng[i][j] = {};

                    //Create the rectangle only if the lat lng are within the given coordinates
                    var showGrid = google.maps.geometry.poly.containsLocation(new google.maps.LatLng(m1Lat + (excLat * i),  m1Lng + (excLng * j)), boundary) || google.maps.geometry.poly.containsLocation(new google.maps.LatLng(m1Lat + (excLat * (i + 1)), m1Lng + (excLng * (j + 1))), boundary);
                    if(showGrid){
                        rectangleLng[i][j] = new google.maps.Rectangle({
                            strokeColor: '#FFFFFF',
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: '#FF0000',
                            fillOpacity: 0.1,
                            map: map,
                            bounds: new google.maps.LatLngBounds(
                            new google.maps.LatLng(m1Lat + (excLat * i), m1Lng + (excLng * j)),
                            new google.maps.LatLng(m1Lat + (excLat * (i + 1)), m1Lng + (excLng * (j + 1))))
                        });
                    }
     
    

                } //for j Lng

            } //for i Lat
};/*end of initMap()*/
