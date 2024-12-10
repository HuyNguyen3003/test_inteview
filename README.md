# Tổ chức dữ liệu để đưa vào db

- crawl data trong 60s để lấy về data
- save file và kiểu tra các kiểu dữ liệu -> các loại protocol khác nhau -> thấy được 11 loại protocol đại diện cho 11 loại msg ( từ data lấy về sau 60s )
- Viết và tổ chức model

* Có thể tổ chức model theo design mongo vd: Lưu tất cả data vào collection a rồi tự tạo ra các collection a1,a2 để lưu data vào tương ứng -> 1 data sẽ tự lưu vào 2 collection a và a1 -> cảm thấy không tối ưu hiệu năng ( không cần thiết để lưu như vậy )
* Tạo 12 model để lưu 11 kiểu data và model còn lại lưu data có dạng khác với các dạng đã tìm thấy
* Viết repository để save data -> mongo

# Crawl và lưu dữ liệu

- Tạo file timeline json \*
- file timeline.json sẽ có dạng [{timeCreate:string, timeSaved: string, filename:string, status:enum {1: Mới lưu file,2: Lưu dữ liệu vào db thành công,3: Lỗi } }]
- Phân tích thành các cronjob khác nhau
- (1)Crawl data vào biến. vd: data[index] -> đẩy dữ liệu vào đủ 500 ( dữ liệu ) thì tăng index của lên = data[index+1] -> Sau khi tăng index lên thì lưu data[index] vào file data[index].json -> lưu vào timeline.json {timeCreate,filename,1} rồi xóa data[index] cũ -> delete data[index]
- (2) Lưu data vào db: đọc file timeline và lấy data có status === 1 -> đọc file theo filename -> sử lí data theo từng loại protocol -> lưu vào db (mongoose) - insertMany -> save thành công update status trong file timeline.json -> tiếp tục
- (x) nếu có lỗi update status rồi chạy tiếp

# Gi chú

- Kiểm tra socket -> ping socket sau 1 khoảng thời gian -> nếu bị lỗi -> log -> handle flow để tự chạy lại
- Hanle flow để cron (1) và (2) từ chạy lại nếu lỗi ở đâu dó
- Quan sát socket thấy có lúc send msg tự động từ client -> socket
- ở cronjob index sẽ bằng timeline.lenth

* update timeline.json thành collection in db để sync data

# use

- Sử dụng lệnh node ./cronJob/crawlData.js để crawl data
- Sử dụng lệnh ./cronJob/insertData.js để save data to db
