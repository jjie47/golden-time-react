import { getAddressByPosition } from "../api/tmapAPI";

// HTML5 geolocation api를 이용해 현재 위치를 가져오고,
// reversegeocoding api를 이용해서 법정 주소로 변환
export async function getCurrentPosition(callback) {

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getCurrentAddress(latitude, longitude, callback);
    }
    
    function error() {
        alert("현재 위치를 검색할 수 없습니다.")
    }

    async function getCurrentAddress(lat, lon, callback) {
        try{
            const response = await getAddressByPosition(lat, lon);
            const city_do = response.data.addressInfo.city_do;
            const gu_gun = response.data.addressInfo.gu_gun;

            callback(city_do, gu_gun);
        }
        catch(error) {
            console.log(error);
        }
    }
    
    if (!navigator.geolocation) {
        alert("현재 브라우저는 위치 정보 제공을 지원하지 않습니다.")
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

export async function getCenterDistance(lat, lon, callback) {
    function success(position) {
        const lat2 = position.coords.latitude;
        const lon2 = position.coords.longitude;
        const lat1 = lat;
        const lon1 = lon;

        const distance = getDistance(lat1, lon1, lat2, lon2);
        callback(distance);
    }

    function getDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const distance = R * c;

        // if(distance.toFixed(1)<1) return (distance * 100).toFixed(0);
        // else return distance.toFixed(1);
        return distance.toFixed(1);
    }

    function deg2rad(deg) {
        return deg * (Math.PI/180);
      }
    
    function error() {
        alert("현재 위치를 검색할 수 없습니다.")
    }
    
    if (!navigator.geolocation) {
        alert("현재 브라우저는 위치 정보 제공을 지원하지 않습니다.")
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

export async function getCurrentDegree(ref) {
    function success(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        ref.current = {currentLat: lat, currentLon: lon};
    }
    
    function error() {
        alert("현재 위치를 검색할 수 없습니다.")
    }
    
    if (!navigator.geolocation) {
        alert("현재 브라우저는 위치 정보 제공을 지원하지 않습니다.")
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}