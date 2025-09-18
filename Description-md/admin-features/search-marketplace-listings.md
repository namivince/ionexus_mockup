# Search & Marketplace Listings — IONEXUS Admin

## Mục tiêu
Cung cấp giao diện quản lý toàn diện cho các listing bất động sản trên marketplace, bao gồm tìm kiếm, đăng tin, phê duyệt và theo dõi hiệu suất.

## Tính năng chính

### 1. Quản lý Listings
- **Danh sách listings**:
  - Tiêu đề listing
  - Loại bất động sản (căn hộ, nhà phố, biệt thự, đất nền, v.v.)
  - Loại giao dịch (bán, cho thuê)
  - Giá
  - Vị trí
  - Người đăng
  - Ngày đăng
  - Trạng thái (chờ duyệt, đã duyệt, từ chối, hết hạn)
  - Lượt xem
  - Lượt liên hệ
- **Bộ lọc và tìm kiếm**:
  - Lọc theo loại bất động sản, loại giao dịch, giá, vị trí, trạng thái
  - Tìm kiếm theo tiêu đề, mã listing, người đăng
- **Sắp xếp**:
  - Theo ngày đăng (mới nhất, cũ nhất)
  - Theo giá (cao đến thấp, thấp đến cao)
  - Theo lượt xem (nhiều nhất, ít nhất)
  - Theo lượt liên hệ (nhiều nhất, ít nhất)
- **Hành động hàng loạt**:
  - Phê duyệt nhiều listings
  - Từ chối nhiều listings
  - Gia hạn nhiều listings
  - Xóa nhiều listings

### 2. Chi tiết Listing
- **Thông tin cơ bản**:
  - Tiêu đề
  - Mô tả
  - Loại bất động sản
  - Loại giao dịch
  - Giá
  - Diện tích
  - Số phòng ngủ
  - Số phòng tắm
  - Hướng
  - Pháp lý
- **Vị trí**:
  - Địa chỉ
  - Phường/Xã
  - Quận/Huyện
  - Tỉnh/Thành phố
  - Bản đồ
- **Thư viện media**:
  - Hình ảnh
  - Video
  - Bản vẽ mặt bằng
  - Tour 3D
- **Tiện ích**:
  - Tiện ích nội khu
  - Tiện ích xung quanh
- **Thông tin liên hệ**:
  - Tên người đăng
  - Số điện thoại
  - Email
  - Loại người đăng (chủ nhà, môi giới, đại lý)
- **Thông tin SEO**:
  - Meta title
  - Meta description
  - Keywords
  - Canonical URL

### 3. Phê duyệt Listings
- **Quy trình phê duyệt**:
  - Danh sách chờ phê duyệt
  - Kiểm tra thông tin
  - Kiểm tra hình ảnh
  - Kiểm tra pháp lý
  - Phê duyệt hoặc từ chối
  - Ghi chú lý do từ chối
- **Tiêu chí phê duyệt**:
  - Đầy đủ thông tin
  - Hình ảnh chất lượng
  - Giá hợp lý
  - Thông tin pháp lý rõ ràng
  - Không vi phạm quy định
- **Thông báo**:
  - Thông báo cho người đăng khi listing được phê duyệt
  - Thông báo cho người đăng khi listing bị từ chối
  - Thông báo cho người đăng khi listing sắp hết hạn

### 4. Quản lý Tìm kiếm
- **Cấu hình tìm kiếm**:
  - Thiết lập các bộ lọc
  - Thiết lập các tùy chọn sắp xếp
  - Thiết lập các trường tìm kiếm
- **Từ khóa phổ biến**:
  - Theo dõi từ khóa phổ biến
  - Gợi ý từ khóa cho người dùng
- **Tìm kiếm nâng cao**:
  - Tìm kiếm theo bán kính
  - Tìm kiếm theo khu vực vẽ trên bản đồ
  - Tìm kiếm theo tiện ích xung quanh
- **Lịch sử tìm kiếm**:
  - Theo dõi lịch sử tìm kiếm của người dùng
  - Phân tích xu hướng tìm kiếm

### 5. Quản lý Featured Listings
- **Thiết lập featured listings**:
  - Chọn listings để hiển thị nổi bật
  - Thiết lập thời gian hiển thị
  - Thiết lập vị trí hiển thị
- **Gói quảng cáo**:
  - Tạo các gói quảng cáo
  - Thiết lập giá
  - Thiết lập thời hạn
  - Thiết lập quyền lợi
- **Theo dõi hiệu suất**:
  - So sánh lượt xem giữa featured và non-featured listings
  - So sánh lượt liên hệ giữa featured và non-featured listings
  - ROI của các gói quảng cáo

### 6. Báo cáo và Phân tích
- **Báo cáo listings**:
  - Số lượng listings mới
  - Tỷ lệ phê duyệt
  - Thời gian phê duyệt trung bình
  - Phân bổ listings theo loại bất động sản, khu vực
- **Báo cáo hiệu suất**:
  - Lượt xem trung bình
  - Lượt liên hệ trung bình
  - Thời gian đăng trung bình
  - Tỷ lệ chuyển đổi (xem -> liên hệ)
- **Phân tích thị trường**:
  - Xu hướng giá theo khu vực
  - Xu hướng nhu cầu theo loại bất động sản
  - So sánh cung-cầu theo khu vực
  - Dự báo xu hướng thị trường

## Wireframe

### Danh sách Listings
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Marketplace Listings                            [+ Add New Listing]     │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Type ▼      │ │ Status ▼    │ │ Price Range ▼          │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Title        │ Type    │ Price      │ Location   │ Status    │ Views│ │
│ ├─────────────┼─────────┼────────────┼───────────┼──────────┼──────┤ │
│ │ Luxury Apt   │ Condo   │ $320,000   │ District 2 │ Active    │ 1,245│ │
│ ├─────────────┼─────────┼────────────┼───────────┼──────────┼──────┤ │
│ │ Villa w/Pool │ Villa   │ $1.2M      │ District 9 │ Pending   │ 0    │ │
│ ├─────────────┼─────────┼────────────┼───────────┼──────────┼──────┤ │
│ │ Office Space │ Office  │ $5,000/mo  │ District 1 │ Active    │ 856  │ │
│ ├─────────────┼─────────┼────────────┼───────────┼──────────┼──────┤ │
│ │ Land Plot    │ Land    │ $450,000   │ District 7 │ Rejected  │ 0    │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 235 listings                   [1] [2] [3] ... [59] >   │
└─────────────────────────────────────────────────────────────────────────┘
```

### Chi tiết Listing
```
┌─────────────────────────────────────────────────────────────────────────┐
│ < Back to Listings                      [Approve] [Reject] [Edit] [Delete]
├─────────────────────────────────────────────────────────────────────────┤
│ Luxury Apartment in District 2                                          │
│                                                                         │
│ ┌───────────┬───────────┬───────────┬───────────┬───────────┐           │
│ │ Details   │ Location  │ Media     │ Contact   │ Analytics │           │
│ └───────────┴───────────┴───────────┴───────────┴───────────┘           │
│                                                                         │
│ ┌─────────────────────────┐  ┌─────────────────────────────────────┐    │
│ │                         │  │ Property Details                    │    │
│ │                         │  │ ┌───────────────┬─────────────────┐ │    │
│ │                         │  │ │ Type          │ Condominium     │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │    Property Image       │  │ │ Transaction   │ For Sale        │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Price         │ $320,000        │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Area          │ 85 m²           │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ └─────────────────────────┘  │ │ Bedrooms      │ 2               │ │    │
│                              │ ├───────────────┼─────────────────┤ │    │
│ Status: Active               │ │ Bathrooms     │ 2               │ │    │
│ Listed by: John Agent        │ └───────────────┴─────────────────┘ │    │
│ Date: Jan 15, 2023           └─────────────────────────────────────┘    │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────┐     │
│ │ Description                                                     │     │
│ │                                                                 │     │
│ │ Luxury apartment in the heart of District 2, featuring modern   │     │
│ │ design, high-end finishes, and panoramic city views. The unit   │     │
│ │ comes with 2 bedrooms, 2 bathrooms, a spacious living area,     │     │
│ │ and a fully equipped kitchen. Building amenities include a      │     │
│ │ swimming pool, gym, and 24/7 security.                          │     │
│ │                                                                 │     │
│ └─────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Phê duyệt Listings
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Pending Listings                                                        │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Type ▼      │ │ Date ▼      │ │ Submitted By ▼         │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Title        │ Type    │ Price      │ Submitted   │ Submitted By   │ │
│ ├─────────────┼─────────┼────────────┼────────────┼────────────────┤ │
│ │ Villa w/Pool │ Villa   │ $1.2M      │ Today       │ Sarah Agent     │ │
│ ├─────────────┼─────────┼────────────┼────────────┼────────────────┤ │
│ │ Studio Apt   │ Condo   │ $180,000   │ Yesterday   │ Mike Agent      │ │
│ ├─────────────┼─────────┼────────────┼────────────┼────────────────┤ │
│ │ Retail Space │ Retail  │ $8,000/mo  │ 2 days ago  │ John Agent      │ │
│ ├─────────────┼─────────┼────────────┼────────────┼────────────────┤ │
│ │ Townhouse    │ House   │ $450,000   │ 3 days ago  │ David Agent     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Quick Review: Villa w/Pool                                         │ │
│ │                                                                     │ │
│ │ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐           │ │
│ │ │                │ │                │ │                │           │ │
│ │ │   Image 1      │ │   Image 2      │ │   Image 3      │           │ │
│ │ │                │ │                │ │                │           │ │
│ │ └────────────────┘ └────────────────┘ └────────────────┘           │ │
│ │                                                                     │ │
│ │ Price: $1,200,000                                                   │ │
│ │ Type: Villa                                                         │ │
│ │ Location: District 9                                                │ │
│ │ Area: 350 m²                                                        │ │
│ │ Bedrooms: 4                                                         │ │
│ │ Bathrooms: 5                                                        │ │
│ │                                                                     │ │
│ │ [View Details] [Approve] [Reject] [Request Changes]                 │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### Báo cáo Marketplace
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Marketplace Analytics                           [Export] [Print] [Share]│
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐             │
│ │                 │ │                 │ │                 │             │
│ │  Active Listings │ │   Avg Views    │ │  Conversion Rate│             │
│ │      235        │ │      542        │ │     3.8%        │             │
│ │   ▲ 15% MoM     │ │   ▲ 22% MoM    │ │   ▲ 0.5% MoM    │             │
│ │                 │ │                 │ │                 │             │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘             │
│                                                                         │
│ ┌─────────────────────────────┐       ┌─────────────────────────────┐   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │     Listings by Type        │       │     Listings by Location    │   │
│ │     (Pie Chart)             │       │     (Bar Chart)             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ └─────────────────────────────┘       └─────────────────────────────┘   │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Top Performing Listings                                            │ │
│ │                                                                     │ │
│ │ Title         │ Type    │ Price      │ Views    │ Inquiries │ CTR  │ │
│ ├──────────────┼─────────┼────────────┼──────────┼───────────┼──────┤ │
│ │ Luxury Apt    │ Condo   │ $320,000   │ 1,245    │ 58        │ 4.7% │ │
│ ├──────────────┼─────────┼────────────┼──────────┼───────────┼──────┤ │
│ │ Office Space  │ Office  │ $5,000/mo  │ 856      │ 42        │ 4.9% │ │
│ ├──────────────┼─────────┼────────────┼──────────┼───────────┼──────┤ │
│ │ City View Apt │ Condo   │ $425,000   │ 789      │ 35        │ 4.4% │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

## Responsive Design

### Desktop (>1200px)
- Hiển thị đầy đủ bảng dữ liệu
- Hiển thị tất cả các biểu đồ và báo cáo
- Grid view cho listings với 3-4 cột

### Tablet (768px - 1199px)
- Thu gọn bảng dữ liệu, ẩn một số cột ít quan trọng
- Grid view cho listings với 2 cột
- Các biểu đồ hiển thị theo chiều dọc

### Mobile (<768px)
- Hiển thị dạng card thay vì bảng
- Grid view cho listings với 1 cột
- Biểu đồ được thu nhỏ và có thể scroll ngang

## Quyền truy cập
- **Super Admin**: Toàn quyền quản lý listings và cấu hình marketplace
- **Content Manager**: Quyền phê duyệt và quản lý listings
- **Agent/Broker**: Quyền tạo và quản lý listings của mình
- **Developer**: Quyền tạo và quản lý listings cho dự án của mình

## API Endpoints

### Listings
- `GET /api/listings` - Lấy danh sách listings
- `GET /api/listings/:id` - Lấy chi tiết listing
- `POST /api/listings` - Tạo listing mới
- `PUT /api/listings/:id` - Cập nhật listing
- `DELETE /api/listings/:id` - Xóa listing
- `PUT /api/listings/:id/approve` - Phê duyệt listing
- `PUT /api/listings/:id/reject` - Từ chối listing
- `PUT /api/listings/:id/feature` - Đánh dấu listing là featured

### Media
- `GET /api/listings/:id/media` - Lấy danh sách media của listing
- `POST /api/listings/:id/media` - Thêm media mới cho listing
- `DELETE /api/listings/:id/media/:mediaId` - Xóa media của listing

### Analytics
- `GET /api/analytics/listings` - Lấy thống kê về listings
- `GET /api/analytics/views` - Lấy thống kê về lượt xem
- `GET /api/analytics/inquiries` - Lấy thống kê về lượt liên hệ
- `GET /api/analytics/conversions` - Lấy thống kê về tỷ lệ chuyển đổi

### Search
- `GET /api/search/config` - Lấy cấu hình tìm kiếm
- `PUT /api/search/config` - Cập nhật cấu hình tìm kiếm
- `GET /api/search/keywords` - Lấy danh sách từ khóa phổ biến
- `GET /api/search/history` - Lấy lịch sử tìm kiếm
