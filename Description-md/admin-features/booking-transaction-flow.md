# Booking & Transaction Flow — IONEXUS Admin

## Mục tiêu
Cung cấp hệ thống quản lý toàn diện cho quy trình đặt chỗ và giao dịch bất động sản, từ đặt cọc đến ký hợp đồng và thanh toán.

## Tính năng chính

### 1. Quản lý Booking
- **Danh sách bookings**:
  - Mã booking
  - Khách hàng
  - Bất động sản/Unit
  - Ngày đặt
  - Thời hạn giữ chỗ
  - Trạng thái (chờ xác nhận, đã xác nhận, đã hủy, đã chuyển thành giao dịch)
  - Số tiền đặt cọc
  - Người phụ trách (sales/agent)
- **Bộ lọc và tìm kiếm**:
  - Lọc theo trạng thái, dự án, thời gian
  - Tìm kiếm theo mã booking, tên khách hàng
- **Quy trình booking**:
  - Tạo booking mới
  - Xác nhận booking
  - Gia hạn booking
  - Hủy booking
  - Chuyển booking thành giao dịch
- **Thông báo**:
  - Thông báo khi có booking mới
  - Thông báo khi booking sắp hết hạn
  - Thông báo khi booking được xác nhận/hủy

### 2. Chi tiết Booking
- **Thông tin cơ bản**:
  - Mã booking
  - Ngày tạo
  - Thời hạn giữ chỗ
  - Trạng thái
- **Thông tin khách hàng**:
  - Tên khách hàng
  - Số điện thoại
  - Email
  - Địa chỉ
  - CMND/CCCD/Hộ chiếu
- **Thông tin bất động sản**:
  - Dự án
  - Mã unit
  - Loại unit
  - Diện tích
  - Giá bán
- **Thông tin đặt cọc**:
  - Số tiền đặt cọc
  - Phương thức thanh toán
  - Ngày thanh toán
  - Trạng thái thanh toán
- **Thông tin sales/agent**:
  - Tên sales/agent
  - Mã sales/agent
  - Số điện thoại
  - Email
- **Lịch sử hoạt động**:
  - Các thay đổi trạng thái
  - Các ghi chú
  - Các tài liệu đính kèm

### 3. Quản lý Giao dịch
- **Danh sách giao dịch**:
  - Mã giao dịch
  - Loại giao dịch (mua bán, cho thuê)
  - Khách hàng
  - Bất động sản/Unit
  - Giá trị giao dịch
  - Ngày tạo
  - Ngày hoàn thành dự kiến
  - Trạng thái (đang xử lý, đã ký hợp đồng, đã thanh toán, đã hoàn thành, đã hủy)
  - Người phụ trách (sales/agent)
- **Bộ lọc và tìm kiếm**:
  - Lọc theo trạng thái, loại giao dịch, dự án, thời gian
  - Tìm kiếm theo mã giao dịch, tên khách hàng
- **Quy trình giao dịch**:
  - Tạo giao dịch mới
  - Cập nhật trạng thái giao dịch
  - Theo dõi tiến độ giao dịch
  - Hoàn thành giao dịch
  - Hủy giao dịch

### 4. Chi tiết Giao dịch
- **Thông tin cơ bản**:
  - Mã giao dịch
  - Loại giao dịch
  - Ngày tạo
  - Trạng thái
- **Thông tin khách hàng**:
  - Tên khách hàng
  - Thông tin liên hệ
  - Thông tin pháp lý
- **Thông tin bất động sản**:
  - Chi tiết bất động sản/unit
  - Giá bán/cho thuê
  - Thông tin pháp lý
- **Thông tin hợp đồng**:
  - Loại hợp đồng
  - Ngày ký
  - Các điều khoản chính
  - Trạng thái hợp đồng
- **Lịch thanh toán**:
  - Các đợt thanh toán
  - Số tiền mỗi đợt
  - Ngày đến hạn
  - Trạng thái thanh toán
- **Hoa hồng và chiết khấu**:
  - Hoa hồng cho sales/agent
  - Chiết khấu cho khách hàng
  - Các khuyến mãi áp dụng
- **Tài liệu**:
  - Hợp đồng đặt cọc
  - Hợp đồng mua bán/cho thuê
  - Biên bản bàn giao
  - Các tài liệu pháp lý khác

### 5. Quản lý Thanh toán
- **Danh sách thanh toán**:
  - Mã thanh toán
  - Giao dịch liên quan
  - Đợt thanh toán
  - Số tiền
  - Ngày đến hạn
  - Ngày thanh toán
  - Phương thức thanh toán
  - Trạng thái (chờ thanh toán, đã thanh toán, quá hạn)
- **Bộ lọc và tìm kiếm**:
  - Lọc theo trạng thái, giao dịch, thời gian
  - Tìm kiếm theo mã thanh toán, tên khách hàng
- **Quy trình thanh toán**:
  - Tạo lịch thanh toán
  - Gửi thông báo thanh toán
  - Xác nhận thanh toán
  - Xuất biên lai/hóa đơn
- **Báo cáo thanh toán**:
  - Tổng số tiền đã thanh toán
  - Tổng số tiền chưa thanh toán
  - Các khoản thanh toán quá hạn
  - Dự báo dòng tiền

### 6. Quản lý Hợp đồng
- **Danh sách hợp đồng**:
  - Mã hợp đồng
  - Loại hợp đồng
  - Giao dịch liên quan
  - Các bên tham gia
  - Ngày ký
  - Ngày hiệu lực
  - Ngày hết hạn
  - Trạng thái (chờ ký, đã ký, đã hết hạn, đã hủy)
- **Bộ lọc và tìm kiếm**:
  - Lọc theo loại hợp đồng, trạng thái, thời gian
  - Tìm kiếm theo mã hợp đồng, tên khách hàng
- **Quản lý mẫu hợp đồng**:
  - Tạo mẫu hợp đồng
  - Chỉnh sửa mẫu hợp đồng
  - Sử dụng mẫu hợp đồng
- **Ký hợp đồng điện tử**:
  - Tạo hợp đồng điện tử
  - Gửi hợp đồng để ký
  - Theo dõi trạng thái ký
  - Lưu trữ hợp đồng đã ký

### 7. Báo cáo và Phân tích
- **Báo cáo bookings**:
  - Số lượng bookings mới
  - Tỷ lệ chuyển đổi từ booking sang giao dịch
  - Thời gian xử lý booking trung bình
- **Báo cáo giao dịch**:
  - Số lượng giao dịch mới
  - Giá trị giao dịch trung bình
  - Thời gian hoàn thành giao dịch trung bình
  - Tỷ lệ giao dịch thành công/thất bại
- **Báo cáo thanh toán**:
  - Tổng doanh thu
  - Tỷ lệ thanh toán đúng hạn
  - Dự báo doanh thu
- **Phân tích hiệu suất**:
  - Hiệu suất của sales/agent
  - Hiệu quả của quy trình giao dịch
  - Các điểm nghẽn trong quy trình

## Wireframe

### Danh sách Bookings
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Bookings                                          [+ New Booking]       │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Status ▼    │ │ Project ▼   │ │ Date Range ▼           │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Booking ID  │ Customer    │ Unit      │ Date       │ Status        │ │
│ ├────────────┼─────────────┼───────────┼────────────┼──────────────┤ │
│ │ B-12345     │ John Doe    │ A-1201    │ Today      │ Confirmed     │ │
│ ├────────────┼─────────────┼───────────┼────────────┼──────────────┤ │
│ │ B-12346     │ Jane Smith  │ B-0502    │ Yesterday  │ Pending       │ │
│ ├────────────┼─────────────┼───────────┼────────────┼──────────────┤ │
│ │ B-12347     │ Bob Johnson │ C-1805    │ 3 days ago │ Converted     │ │
│ ├────────────┼─────────────┼───────────┼────────────┼──────────────┤ │
│ │ B-12348     │ Alice Brown │ A-0304    │ 1 week ago │ Cancelled     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 78 bookings                     [1] [2] [3] ... [20] >  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Chi tiết Booking
```
┌─────────────────────────────────────────────────────────────────────────┐
│ < Back to Bookings                     [Confirm] [Cancel] [Convert]     │
├─────────────────────────────────────────────────────────────────────────┤
│ Booking #B-12345                                                        │
│                                                                         │
│ ┌───────────┬───────────┬───────────┬───────────┬───────────┐           │
│ │ Details   │ Customer  │ Property  │ Payment   │ History   │           │
│ └───────────┴───────────┴───────────┴───────────┴───────────┘           │
│                                                                         │
│ ┌─────────────────────────┐  ┌─────────────────────────────────────┐    │
│ │                         │  │ Booking Details                     │    │
│ │                         │  │ ┌───────────────┬─────────────────┐ │    │
│ │                         │  │ │ Status        │ Confirmed       │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │     Property Image      │  │ │ Created       │ Jan 15, 2023    │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Expires       │ Jan 22, 2023    │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Agent         │ David Agent     │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ └─────────────────────────┘  │ │ Deposit       │ $5,000          │ │    │
│                              │ └───────────────┴─────────────────┘ │    │
│ Customer: John Doe           └─────────────────────────────────────┘    │
│ Unit: A-1201, Palm Heights                                              │
│ Price: $320,000                                                         │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────┐     │
│ │ Activity History                                                │     │
│ │                                                                 │     │
│ │ Jan 15, 2023 - Booking created by David Agent                   │     │
│ │ Jan 15, 2023 - Deposit payment confirmed                        │     │
│ │ Jan 15, 2023 - Booking confirmed                                │     │
│ │                                                                 │     │
│ │ [Add Note]                                                      │     │
│ └─────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Danh sách Giao dịch
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Transactions                                    [+ New Transaction]     │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Status ▼    │ │ Type ▼      │ │ Date Range ▼           │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Trans. ID   │ Customer    │ Property   │ Value      │ Status       │ │
│ ├────────────┼─────────────┼───────────┼────────────┼─────────────┤ │
│ │ T-5001      │ Bob Johnson │ C-1805    │ $450,000   │ Completed    │ │
│ ├────────────┼─────────────┼───────────┼────────────┼─────────────┤ │
│ │ T-5002      │ Jane Smith  │ B-0502    │ $280,000   │ Processing   │ │
│ ├────────────┼─────────────┼───────────┼────────────┼─────────────┤ │
│ │ T-5003      │ Tom Wilson  │ A-1506    │ $390,000   │ Contracted   │ │
│ ├────────────┼─────────────┼───────────┼────────────┼─────────────┤ │
│ │ T-5004      │ Sarah Lee   │ D-2103    │ $520,000   │ Cancelled    │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 42 transactions                 [1] [2] [3] ... [11] >  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Chi tiết Giao dịch
```
┌─────────────────────────────────────────────────────────────────────────┐
│ < Back to Transactions                [Update Status] [Edit] [Cancel]   │
├─────────────────────────────────────────────────────────────────────────┤
│ Transaction #T-5001                                                     │
│                                                                         │
│ ┌───────────┬───────────┬───────────┬───────────┬───────────┐           │
│ │ Overview  │ Customer  │ Property  │ Payments  │ Documents │           │
│ └───────────┴───────────┴───────────┴───────────┴───────────┘           │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Transaction Progress                                               │ │
│ │                                                                     │ │
│ │ [Booking] → [Contract] → [Payment] → [Transfer] → [Completion]      │ │
│ │    ✓           ✓            ✓           ✓            ✓              │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────┐  ┌─────────────────────────────────────┐    │
│ │                         │  │ Transaction Details                 │    │
│ │                         │  │ ┌───────────────┬─────────────────┐ │    │
│ │                         │  │ │ Status        │ Completed       │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │     Property Image      │  │ │ Created       │ Mar 10, 2023    │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Completed     │ Apr 25, 2023    │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Agent         │ Sarah Agent     │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ └─────────────────────────┘  │ │ Value         │ $450,000        │ │    │
│                              │ └───────────────┴─────────────────┘ │    │
│ Customer: Bob Johnson        └─────────────────────────────────────┘    │
│ Property: C-1805, Sky Garden                                            │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────┐     │
│ │ Payment Schedule                                                │     │
│ │                                                                 │     │
│ │ Stage       │ Amount     │ Due Date    │ Status     │ Date Paid │     │
│ ├────────────┼───────────┼────────────┼───────────┼──────────┤     │
│ │ Deposit     │ $45,000    │ Mar 10, 2023│ Paid       │ Mar 10    │     │
│ │ 1st Payment │ $135,000   │ Mar 25, 2023│ Paid       │ Mar 23    │     │
│ │ 2nd Payment │ $135,000   │ Apr 10, 2023│ Paid       │ Apr 08    │     │
│ │ Final       │ $135,000   │ Apr 25, 2023│ Paid       │ Apr 22    │     │
│ └─────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

## Responsive Design

### Desktop (>1200px)
- Hiển thị đầy đủ bảng dữ liệu
- Hiển thị tất cả các bước trong quy trình giao dịch
- Layout 2 cột cho chi tiết booking/giao dịch

### Tablet (768px - 1199px)
- Thu gọn bảng dữ liệu, ẩn một số cột ít quan trọng
- Hiển thị quy trình giao dịch dạng accordion
- Layout 1 cột cho chi tiết booking/giao dịch

### Mobile (<768px)
- Hiển thị dạng card thay vì bảng
- Hiển thị quy trình giao dịch dạng stepper dọc
- Các tab được hiển thị dạng accordion

## Quyền truy cập
- **Super Admin**: Toàn quyền quản lý bookings và giao dịch
- **Sales Manager**: Quyền xem tất cả bookings và giao dịch, phê duyệt giao dịch
- **Sales/Agent**: Quyền tạo và quản lý bookings và giao dịch của mình
- **Finance**: Quyền xem và quản lý thanh toán

## API Endpoints

### Bookings
- `GET /api/bookings` - Lấy danh sách bookings
- `GET /api/bookings/:id` - Lấy chi tiết booking
- `POST /api/bookings` - Tạo booking mới
- `PUT /api/bookings/:id` - Cập nhật booking
- `PUT /api/bookings/:id/confirm` - Xác nhận booking
- `PUT /api/bookings/:id/cancel` - Hủy booking
- `POST /api/bookings/:id/convert` - Chuyển booking thành giao dịch

### Transactions
- `GET /api/transactions` - Lấy danh sách giao dịch
- `GET /api/transactions/:id` - Lấy chi tiết giao dịch
- `POST /api/transactions` - Tạo giao dịch mới
- `PUT /api/transactions/:id` - Cập nhật giao dịch
- `PUT /api/transactions/:id/status` - Cập nhật trạng thái giao dịch
- `DELETE /api/transactions/:id` - Hủy giao dịch

### Payments
- `GET /api/transactions/:id/payments` - Lấy danh sách thanh toán của giao dịch
- `POST /api/payments` - Tạo thanh toán mới
- `PUT /api/payments/:id` - Cập nhật thanh toán
- `PUT /api/payments/:id/confirm` - Xác nhận thanh toán

### Contracts
- `GET /api/transactions/:id/contracts` - Lấy danh sách hợp đồng của giao dịch
- `GET /api/contracts/:id` - Lấy chi tiết hợp đồng
- `POST /api/contracts` - Tạo hợp đồng mới
- `PUT /api/contracts/:id` - Cập nhật hợp đồng
- `PUT /api/contracts/:id/sign` - Ký hợp đồng
