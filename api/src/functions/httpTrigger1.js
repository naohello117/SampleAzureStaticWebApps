const { app } = require('@azure/functions');

// --- [index.js から移植した関数] ---
function get_time(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // 0-basedなので +1
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    return (
        year + "/" + 
        month + "/" +
        date + " " +
        hour + ":" +
        minute
    );
}
// ------------------------------------

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        // 時刻を取得
        const currentTime = get_time();
        
        // JSON形式でレスポンスを返す
        return {
            status: 200, // ステータスコード200 OK
            // レスポンスのJSONオブジェクトを定義
            jsonBody: {
                time: currentTime
            }
        };
    }
});