const API_KEY = '1ae63aa1b49b'
const API_SECRET = '89e04030cd'
const BASE_URL = 'https://api.vindecoder.eu/3.1'
const controlsum = substr(sha1("{$vin}|{$id}|{$apikey}|{$secretkey}"), 0, 10);
const FULL_URL = 'https://api.vindecoder.eu/3.1/API_KEY/CONTROL_SUM/decode/info/XXXDEF1GH23456789.json'


$apiPrefix = "https://api.vindecoder.eu/3.1";
$apikey = "1ae63aa1b49b";   // Your API key
$secretkey = "89e04030cd";  // Your secret key
$id = "info";
$vin = mb_strtoupper("XXXDEF1GH23456789");

$controlsum = substr(sha1("{$vin}|{$id}|{$apikey}|{$secretkey}"), 0, 10);

$data = file_get_contents("{$apiPrefix}/{$apikey}/{$controlsum}/decode/info/{$vin}.json", false);
$result = json_decode($data);


fetch("https://vindecoder.p.rapidapi.com/decode_vin?vin=4F2YU09161KM33122", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "vindecoder.p.rapidapi.com",
		"x-rapidapi-key": "d05af97474msh7862c7f459849eap1c29f3jsnc3a3c2f01a5c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});