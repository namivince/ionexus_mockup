# Project Management — IONEXUS Admin

## Mục tiêu
Cung cấp giao diện quản lý toàn diện cho các dự án bất động sản, bao gồm thông tin dự án, unit availability và chính sách.

## Tính năng chính

### 1. Danh sách dự án
- **Bảng dự án**: Hiển thị danh sách tất cả các dự án với thông tin cơ bản
  - Tên dự án
  - Vị trí
  - Chủ đầu tư
  - Số lượng unit
  - Trạng thái (Sắp mở bán, Đang bán, Đã bán hết, Đã hoàn thành)
  - Ngày ra mắt
  - Ngày hoàn thành dự kiến
- **Bộ lọc và tìm kiếm**: 
  - Lọc theo trạng thái, vị trí, chủ đầu tư
  - Tìm kiếm theo tên dự án
- **Sắp xếp**: 
  - Theo tên, ngày ra mắt, ngày hoàn thành, số lượng unit
- **Phân trang**: 
  - 10/25/50 dự án mỗi trang
- **Hành động hàng loạt**:
  - Xuất dữ liệu (CSV, Excel)
  - Cập nhật trạng thái hàng loạt

### 2. Chi tiết dự án
- **Thông tin cơ bản**:
  - Tên dự án
  - Mô tả
  - Vị trí (địa chỉ, tọa độ bản đồ)
  - Chủ đầu tư
  - Đơn vị phát triển
  - Đơn vị phân phối
  - Trạng thái
  - Ngày ra mắt
  - Ngày hoàn thành dự kiến
  - Diện tích tổng thể
- **Thư viện media**:
  - Hình ảnh dự án
  - Video giới thiệu
  - Tài liệu marketing
  - Bản vẽ thiết kế
  - Mô hình 3D
- **Tiện ích dự án**:
  - Danh sách tiện ích
  - Hình ảnh tiện ích
  - Mô tả chi tiết
- **Thông tin pháp lý**:
  - Giấy phép xây dựng
  - Giấy chứng nhận quyền sử dụng đất
  - Các giấy tờ pháp lý khác

### 3. Quản lý Unit
- **Danh sách unit**:
  - Mã unit
  - Loại unit (1PN, 2PN, 3PN, Penthouse, v.v.)
  - Diện tích
  - Giá bán
  - Trạng thái (Có sẵn, Đã đặt cọc, Đã bán)
  - Tầng
  - Hướng
  - View
- **Bộ lọc unit**:
  - Lọc theo loại, trạng thái, tầng, hướng, giá
- **Cập nhật hàng loạt**:
  - Cập nhật giá
  - Cập nhật trạng thái
  - Cập nhật chính sách bán hàng
- **Bản đồ tương tác**:
  - Hiển thị sơ đồ các tầng
  - Hiển thị trạng thái unit bằng màu sắc
  - Click để xem chi tiết unit

### 4. Chính sách bán hàng
- **Quản lý chính sách**:
  - Tên chính sách
  - Thời gian áp dụng
  - Mô tả chi tiết
  - Đối tượng áp dụng
- **Chiết khấu**:
  - Tỷ lệ chiết khấu
  - Điều kiện áp dụng
  - Thời gian áp dụng
- **Khuyến mãi**:
  - Loại khuyến mãi
  - Giá trị khuyến mãi
  - Điều kiện áp dụng
  - Thời gian áp dụng
- **Phương thức thanh toán**:
  - Thanh toán một lần
  - Thanh toán theo tiến độ
  - Thanh toán qua ngân hàng

### 5. Báo cáo dự án
- **Tổng quan dự án**:
  - Tỷ lệ bán
  - Doanh thu
  - Số lượng unit đã bán/còn lại
- **Biểu đồ**:
  - Biểu đồ tiến độ bán hàng
  - Biểu đồ doanh thu theo thời gian
  - Biểu đồ phân bổ unit theo trạng thái
- **Xuất báo cáo**:
  - PDF
  - Excel
  - CSV

## Wireframe

### Danh sách dự án
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Projects                                          [+ Add New Project]   │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Status ▼    │ │ Location ▼  │ │ Developer ▼             │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Project Name ▲ │ Location    │ Status   │ Units │ Launch Date      │ │
│ ├───────────────┼─────────────┼──────────┼───────┼─────────────────┤ │
│ │ Palm Heights  │ District 2  │ Selling  │ 816   │ Jan 15, 2023    │ │
│ ├───────────────┼─────────────┼──────────┼───────┼─────────────────┤ │
│ │ Sky Garden    │ District 7  │ Upcoming │ 1240  │ Mar 20, 2023    │ │
│ ├───────────────┼─────────────┼──────────┼───────┼─────────────────┤ │
│ │ River View    │ District 1  │ Sold Out │ 512   │ Oct 10, 2022    │ │
│ ├───────────────┼─────────────┼──────────┼───────┼─────────────────┤ │
│ │ Sun Tower     │ District 4  │ Selling  │ 328   │ Feb 05, 2023    │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 24 projects                  [1] [2] [3] ... [6] >      │
└─────────────────────────────────────────────────────────────────────────┘
```

### Chi tiết dự án
```
┌─────────────────────────────────────────────────────────────────────────┐
│ < Back to Projects                                  [Edit] [Delete]     │
├─────────────────────────────────────────────────────────────────────────┤
│ Palm Heights                                                            │
│                                                                         │
│ ┌───────────┬───────────┬───────────┬───────────┬───────────┐           │
│ │ Overview  │ Units     │ Media     │ Policies  │ Reports   │           │
│ └───────────┴───────────┴───────────┴───────────┴───────────┘           │
│                                                                         │
│ ┌─────────────────────────┐  ┌─────────────────────────────────────┐    │
│ │                         │  │ Project Details                     │    │
│ │                         │  │ ┌───────────────┬─────────────────┐ │    │
│ │                         │  │ │ Developer     │ ABC Development │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │      Project Image      │  │ │ Status        │ Selling         │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Launch Date   │ Jan 15, 2023    │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Completion    │ Dec 2025        │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ └─────────────────────────┘  │ │ Total Units   │ 816             │ │    │
│                              │ └───────────────┴─────────────────┘ │    │
│ Location: 123 ABC Street,    └─────────────────────────────────────┘    │
│ District 2, HCMC                                                        │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────┐     │
│ │ Description                                                     │     │
│ │                                                                 │     │
│ │ Palm Heights is a luxury residential complex located in the     │     │
│ │ heart of District 2, offering panoramic views of the Saigon     │     │
│ │ River. The project features modern architecture, premium        │     │
│ │ facilities, and is scheduled for completion in December 2025.   │     │
│ │                                                                 │     │
│ └─────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Quản lý Unit
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Palm Heights > Units                                 [+ Add Unit]       │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Type ▼      │ │ Status ▼    │ │ Floor ▼                │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Unit Code  │ Type   │ Area (m²) │ Price (USD) │ Status    │ Floor │ │
│ ├───────────┼────────┼───────────┼────────────┼──────────┼───────┤ │
│ │ A-1201    │ 2BR    │ 85.5      │ 320,000    │ Available │ 12    │ │
│ ├───────────┼────────┼───────────┼────────────┼──────────┼───────┤ │
│ │ A-1202    │ 3BR    │ 120.3     │ 450,000    │ Reserved  │ 12    │ │
│ ├───────────┼────────┼───────────┼────────────┼──────────┼───────┤ │
│ │ A-1203    │ 1BR    │ 55.8      │ 210,000    │ Sold     │ 12    │ │
│ ├───────────┼────────┼───────────┼────────────┼──────────┼───────┤ │
│ │ A-1204    │ 2BR+   │ 95.2      │ 360,000    │ Available │ 12    │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │                          Floor Plan View                            │ │
│ │                                                                     │ │
│ │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐        │ │
│ │  │A-1201│  │A-1202│  │A-1203│  │A-1204│  │A-1205│  │A-1206│        │ │
│ │  │      │  │      │  │      │  │      │  │      │  │      │        │ │
│ │  │ Avail│  │ Resv │  │ Sold │  │ Avail│  │ Sold │  │ Resv │        │ │
│ │  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘        │ │
│ │                                                                     │ │
│ │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐        │ │
│ │  │A-1207│  │A-1208│  │A-1209│  │A-1210│  │A-1211│  │A-1212│        │ │
│ │  │      │  │      │  │      │  │      │  │      │  │      │        │ │
│ │  │ Avail│  │ Avail│  │ Sold │  │ Sold │  │ Resv │  │ Avail│        │ │
│ │  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘        │ │
│ │                                                                     │ │
│ │  Floor: [1] [2] ... [11] [12] [13] ... [25]                        │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

## Responsive Design

### Desktop (>1200px)
- Hiển thị đầy đủ bảng dữ liệu
- Hiển thị sơ đồ tầng với kích thước lớn
- Hiển thị tất cả các cột trong bảng

### Tablet (768px - 1199px)
- Thu gọn bảng dữ liệu, ẩn một số cột ít quan trọng
- Hiển thị sơ đồ tầng với kích thước vừa
- Các bộ lọc hiển thị dạng dropdown

### Mobile (<768px)
- Hiển thị dạng card thay vì bảng
- Sơ đồ tầng hiển thị theo chiều dọc, có thể scroll
- Bộ lọc hiển thị dạng accordion

## Quyền truy cập
- **Super Admin**: Toàn quyền quản lý dự án, unit và chính sách
- **Developer**: Quyền xem và quản lý các dự án của mình
- **Sale**: Quyền xem thông tin dự án và unit, không có quyền chỉnh sửa thông tin dự án

## API Endpoints

### Projects
- `GET /api/projects` - Lấy danh sách dự án
- `GET /api/projects/:id` - Lấy chi tiết dự án
- `POST /api/projects` - Tạo dự án mới
- `PUT /api/projects/:id` - Cập nhật dự án
- `DELETE /api/projects/:id` - Xóa dự án

### Units
- `GET /api/projects/:id/units` - Lấy danh sách unit của dự án
- `GET /api/units/:id` - Lấy chi tiết unit
- `POST /api/units` - Tạo unit mới
- `PUT /api/units/:id` - Cập nhật unit
- `DELETE /api/units/:id` - Xóa unit

### Policies
- `GET /api/projects/:id/policies` - Lấy danh sách chính sách của dự án
- `GET /api/policies/:id` - Lấy chi tiết chính sách
- `POST /api/policies` - Tạo chính sách mới
- `PUT /api/policies/:id` - Cập nhật chính sách
- `DELETE /api/policies/:id` - Xóa chính sách
