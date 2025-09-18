# Payment & Commission Tracking — IONEXUS Admin

## Mục tiêu
Cung cấp hệ thống quản lý thanh toán và theo dõi hoa hồng toàn diện, giúp theo dõi dòng tiền, tính toán hoa hồng cho agents/sales và đảm bảo tính minh bạch trong giao dịch tài chính.

## Tính năng chính

### 1. Quản lý Thanh toán
- **Danh sách thanh toán**:
  - Mã thanh toán
  - Giao dịch liên quan
  - Khách hàng
  - Số tiền
  - Phương thức thanh toán
  - Ngày thanh toán
  - Trạng thái (chờ xác nhận, đã xác nhận, từ chối)
  - Người xác nhận
- **Bộ lọc và tìm kiếm**:
  - Lọc theo trạng thái, phương thức thanh toán, thời gian
  - Tìm kiếm theo mã thanh toán, tên khách hàng, mã giao dịch
- **Quy trình thanh toán**:
  - Tạo thanh toán mới
  - Xác nhận thanh toán
  - Từ chối thanh toán
  - In biên lai
- **Phương thức thanh toán**:
  - Tiền mặt
  - Chuyển khoản ngân hàng
  - Thẻ tín dụng/ghi nợ
  - Ví điện tử
  - Séc

### 2. Chi tiết Thanh toán
- **Thông tin cơ bản**:
  - Mã thanh toán
  - Ngày tạo
  - Trạng thái
- **Thông tin giao dịch**:
  - Mã giao dịch
  - Loại giao dịch
  - Bất động sản/Unit
  - Giá trị giao dịch
- **Thông tin khách hàng**:
  - Tên khách hàng
  - Thông tin liên hệ
- **Thông tin thanh toán**:
  - Số tiền
  - Phương thức thanh toán
  - Ngày thanh toán
  - Mã tham chiếu
  - Ghi chú
- **Tài liệu đính kèm**:
  - Biên lai
  - Chứng từ chuyển khoản
  - Hình ảnh séc
  - Các tài liệu khác

### 3. Lịch thanh toán
- **Danh sách lịch thanh toán**:
  - Mã giao dịch
  - Khách hàng
  - Đợt thanh toán
  - Số tiền
  - Ngày đến hạn
  - Trạng thái (chưa đến hạn, đến hạn, quá hạn, đã thanh toán)
- **Bộ lọc và tìm kiếm**:
  - Lọc theo trạng thái, thời gian
  - Tìm kiếm theo mã giao dịch, tên khách hàng
- **Nhắc nhở thanh toán**:
  - Tự động gửi email nhắc nhở
  - Tự động gửi SMS nhắc nhở
  - Lịch nhắc nhở cho sales/agent
- **Báo cáo lịch thanh toán**:
  - Tổng số tiền đến hạn
  - Tổng số tiền quá hạn
  - Dự báo dòng tiền

### 4. Quản lý Hoa hồng
- **Danh sách hoa hồng**:
  - Mã hoa hồng
  - Sales/Agent
  - Giao dịch liên quan
  - Số tiền hoa hồng
  - Tỷ lệ hoa hồng
  - Trạng thái (chờ duyệt, đã duyệt, đã thanh toán, từ chối)
  - Ngày tạo
  - Ngày thanh toán
- **Bộ lọc và tìm kiếm**:
  - Lọc theo trạng thái, sales/agent, thời gian
  - Tìm kiếm theo mã hoa hồng, tên sales/agent
- **Quy trình hoa hồng**:
  - Tính toán hoa hồng tự động
  - Duyệt hoa hồng
  - Thanh toán hoa hồng
  - In phiếu chi hoa hồng

### 5. Chi tiết Hoa hồng
- **Thông tin cơ bản**:
  - Mã hoa hồng
  - Ngày tạo
  - Trạng thái
- **Thông tin sales/agent**:
  - Tên sales/agent
  - Mã sales/agent
  - Thông tin liên hệ
  - Thông tin tài khoản ngân hàng
- **Thông tin giao dịch**:
  - Mã giao dịch
  - Loại giao dịch
  - Bất động sản/Unit
  - Giá trị giao dịch
  - Ngày hoàn thành
- **Thông tin hoa hồng**:
  - Tỷ lệ hoa hồng
  - Số tiền hoa hồng
  - Thuế thu nhập cá nhân
  - Số tiền thực nhận
- **Thông tin thanh toán**:
  - Phương thức thanh toán
  - Ngày thanh toán
  - Người thanh toán
  - Ghi chú

### 6. Cấu hình Hoa hồng
- **Cấu hình tỷ lệ hoa hồng**:
  - Theo loại bất động sản
  - Theo dự án
  - Theo giá trị giao dịch
  - Theo cấp bậc sales/agent
- **Cấu hình điều kiện**:
  - Điều kiện nhận hoa hồng
  - Thời điểm thanh toán hoa hồng
  - Chính sách khấu trừ
- **Cấu hình thuế**:
  - Tỷ lệ thuế thu nhập cá nhân
  - Cách tính thuế
  - Miễn giảm thuế
- **Cấu hình thưởng**:
  - Thưởng theo doanh số
  - Thưởng theo số lượng giao dịch
  - Thưởng đặc biệt

### 7. Báo cáo và Phân tích
- **Báo cáo thanh toán**:
  - Tổng số tiền đã nhận
  - Phân bổ theo phương thức thanh toán
  - Phân bổ theo thời gian
  - So sánh với kế hoạch
- **Báo cáo hoa hồng**:
  - Tổng số tiền hoa hồng
  - Phân bổ theo sales/agent
  - Phân bổ theo dự án
  - So sánh với kỳ trước
- **Báo cáo dòng tiền**:
  - Dòng tiền vào
  - Dòng tiền ra
  - Dự báo dòng tiền
  - Phân tích xu hướng
- **Phân tích hiệu suất**:
  - Hiệu suất của sales/agent
  - ROI theo dự án
  - Tỷ lệ chi phí hoa hồng trên doanh thu

## Wireframe

### Danh sách Thanh toán
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Payments                                         [+ New Payment]        │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Status ▼    │ │ Method ▼    │ │ Date Range ▼           │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Payment ID │ Transaction │ Customer    │ Amount     │ Status       │ │
│ ├───────────┼────────────┼─────────────┼────────────┼─────────────┤ │
│ │ P-10001    │ T-5001     │ Bob Johnson │ $45,000    │ Confirmed    │ │
│ ├───────────┼────────────┼─────────────┼────────────┼─────────────┤ │
│ │ P-10002    │ T-5002     │ Jane Smith  │ $28,000    │ Pending      │ │
│ ├───────────┼────────────┼─────────────┼────────────┼─────────────┤ │
│ │ P-10003    │ T-5003     │ Tom Wilson  │ $39,000    │ Confirmed    │ │
│ ├───────────┼────────────┼─────────────┼────────────┼─────────────┤ │
│ │ P-10004    │ T-5004     │ Sarah Lee   │ $52,000    │ Rejected     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 128 payments                    [1] [2] [3] ... [32] >  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Chi tiết Thanh toán
```
┌─────────────────────────────────────────────────────────────────────────┐
│ < Back to Payments                       [Confirm] [Reject] [Print]     │
├─────────────────────────────────────────────────────────────────────────┤
│ Payment #P-10001                                                        │
│                                                                         │
│ ┌───────────┬───────────┬───────────┬───────────┬───────────┐           │
│ │ Details   │ Customer  │ Transaction│ Documents│ History   │           │
│ └───────────┴───────────┴───────────┴───────────┴───────────┘           │
│                                                                         │
│ ┌─────────────────────────┐  ┌─────────────────────────────────────┐    │
│ │                         │  │ Payment Details                     │    │
│ │                         │  │ ┌───────────────┬─────────────────┐ │    │
│ │                         │  │ │ Status        │ Confirmed       │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │     Receipt Image       │  │ │ Date          │ Mar 10, 2023    │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Method        │ Bank Transfer   │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Reference     │ BT12345678      │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ └─────────────────────────┘  │ │ Amount        │ $45,000         │ │    │
│                              │ └───────────────┴─────────────────┘ │    │
│ Transaction: T-5001          └─────────────────────────────────────┘    │
│ Customer: Bob Johnson                                                   │
│ Property: C-1805, Sky Garden                                            │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────┐     │
│ │ Notes                                                           │     │
│ │                                                                 │     │
│ │ First installment payment for unit C-1805. Bank transfer        │     │
│ │ confirmed on Mar 10, 2023. Receipt has been sent to customer.   │     │
│ │                                                                 │     │
│ │ [Add Note]                                                      │     │
│ └─────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Lịch thanh toán
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Payment Schedule                                 [+ Add Schedule]       │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Status ▼    │ │ Project ▼   │ │ Date Range ▼           │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Transaction │ Customer    │ Installment │ Amount    │ Due Date     │ │
│ ├────────────┼─────────────┼────────────┼───────────┼─────────────┤ │
│ │ T-5002      │ Jane Smith  │ 1st         │ $28,000   │ Tomorrow     │ │
│ ├────────────┼─────────────┼────────────┼───────────┼─────────────┤ │
│ │ T-5003      │ Tom Wilson  │ 2nd         │ $39,000   │ Next week    │ │
│ ├────────────┼─────────────┼────────────┼───────────┼─────────────┤ │
│ │ T-5005      │ John Doe    │ 1st         │ $32,000   │ Overdue      │ │
│ ├────────────┼─────────────┼────────────┼───────────┼─────────────┤ │
│ │ T-5006      │ Lisa Johnson│ 3rd         │ $42,000   │ In 2 weeks   │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Upcoming Payments                                                  │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │     Payment Schedule Chart                                          │ │
│ │     (Bar Chart by Month)                                            │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Actions: [Send Reminders] [Generate Report] [Export to Excel]           │
└─────────────────────────────────────────────────────────────────────────┘
```

### Danh sách Hoa hồng
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Commissions                                    [+ New Commission]       │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Status ▼    │ │ Agent ▼     │ │ Date Range ▼           │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Comm. ID   │ Agent       │ Transaction │ Amount    │ Status        │ │
│ ├───────────┼─────────────┼────────────┼───────────┼──────────────┤ │
│ │ C-2001     │ David Agent │ T-5001     │ $13,500   │ Paid          │ │
│ ├───────────┼─────────────┼────────────┼───────────┼──────────────┤ │
│ │ C-2002     │ Sarah Agent │ T-5002     │ $8,400    │ Approved      │ │
│ ├───────────┼─────────────┼────────────┼───────────┼──────────────┤ │
│ │ C-2003     │ Mike Agent  │ T-5003     │ $11,700   │ Pending       │ │
│ ├───────────┼─────────────┼────────────┼───────────┼──────────────┤ │
│ │ C-2004     │ Lisa Agent  │ T-5004     │ $15,600   │ Rejected      │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 86 commissions                  [1] [2] [3] ... [22] >  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Chi tiết Hoa hồng
```
┌─────────────────────────────────────────────────────────────────────────┐
│ < Back to Commissions                  [Approve] [Reject] [Pay] [Print] │
├─────────────────────────────────────────────────────────────────────────┤
│ Commission #C-2001                                                      │
│                                                                         │
│ ┌───────────┬───────────┬───────────┬───────────┬───────────┐           │
│ │ Details   │ Agent     │ Transaction│ Payment  │ History   │           │
│ └───────────┴───────────┴───────────┴───────────┴───────────┘           │
│                                                                         │
│ ┌─────────────────────────┐  ┌─────────────────────────────────────┐    │
│ │                         │  │ Commission Details                  │    │
│ │                         │  │ ┌───────────────┬─────────────────┐ │    │
│ │                         │  │ │ Status        │ Paid            │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │     Agent Photo         │  │ │ Created       │ Apr 26, 2023    │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Paid Date     │ May 05, 2023    │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Rate          │ 3%              │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ └─────────────────────────┘  │ │ Amount        │ $13,500         │ │    │
│                              │ └───────────────┴─────────────────┘ │    │
│ Agent: David Agent           └─────────────────────────────────────┘    │
│ Transaction: T-5001                                                     │
│ Property: C-1805, Sky Garden                                            │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────┐     │
│ │ Calculation                                                     │     │
│ │                                                                 │     │
│ │ Transaction Value: $450,000                                     │     │
│ │ Commission Rate: 3%                                             │     │
│ │ Gross Commission: $13,500                                       │     │
│ │ Personal Income Tax (10%): $1,350                               │     │
│ │ Net Commission: $12,150                                         │     │
│ │                                                                 │     │
│ └─────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Báo cáo Tài chính
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Financial Analytics                             [Export] [Print] [Share]│
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐             │
│ │                 │ │                 │ │                 │             │
│ │ Total Revenue   │ │ Commissions     │ │  Collection Rate│             │
│ │   $4.85M        │ │   $145,200      │ │     92.5%       │             │
│ │   ▲ 18% MoM     │ │   ▲ 12% MoM     │ │   ▲ 2.5% MoM    │             │
│ │                 │ │                 │ │                 │             │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘             │
│                                                                         │
│ ┌─────────────────────────────┐       ┌─────────────────────────────┐   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │     Revenue by Project      │       │     Payment Methods         │   │
│ │     (Bar Chart)             │       │     (Pie Chart)             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ └─────────────────────────────┘       └─────────────────────────────┘   │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Cash Flow Forecast                                                 │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │     Cash Flow Chart                                                 │ │
│ │     (Line Chart by Month)                                           │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

## Responsive Design

### Desktop (>1200px)
- Hiển thị đầy đủ bảng dữ liệu
- Hiển thị tất cả các biểu đồ và báo cáo
- Layout 2 cột cho chi tiết thanh toán và hoa hồng

### Tablet (768px - 1199px)
- Thu gọn bảng dữ liệu, ẩn một số cột ít quan trọng
- Hiển thị các biểu đồ theo chiều dọc
- Layout 1 cột cho chi tiết thanh toán và hoa hồng

### Mobile (<768px)
- Hiển thị dạng card thay vì bảng
- Hiển thị các biểu đồ đơn giản hóa
- Các tab được hiển thị dạng accordion

## Quyền truy cập
- **Super Admin**: Toàn quyền quản lý thanh toán và hoa hồng
- **Finance Manager**: Quyền xem và quản lý tất cả thanh toán và hoa hồng
- **Finance Staff**: Quyền xem và xử lý thanh toán, xem thông tin hoa hồng
- **Sales Manager**: Quyền xem thông tin hoa hồng của team
- **Sales/Agent**: Quyền xem thông tin hoa hồng của mình

## API Endpoints

### Payments
- `GET /api/payments` - Lấy danh sách thanh toán
- `GET /api/payments/:id` - Lấy chi tiết thanh toán
- `POST /api/payments` - Tạo thanh toán mới
- `PUT /api/payments/:id` - Cập nhật thanh toán
- `PUT /api/payments/:id/confirm` - Xác nhận thanh toán
- `PUT /api/payments/:id/reject` - Từ chối thanh toán

### Payment Schedules
- `GET /api/payment-schedules` - Lấy danh sách lịch thanh toán
- `GET /api/transactions/:id/payment-schedules` - Lấy lịch thanh toán của giao dịch
- `POST /api/payment-schedules` - Tạo lịch thanh toán mới
- `PUT /api/payment-schedules/:id` - Cập nhật lịch thanh toán
- `POST /api/payment-schedules/reminders` - Gửi nhắc nhở thanh toán

### Commissions
- `GET /api/commissions` - Lấy danh sách hoa hồng
- `GET /api/commissions/:id` - Lấy chi tiết hoa hồng
- `POST /api/commissions` - Tạo hoa hồng mới
- `PUT /api/commissions/:id` - Cập nhật hoa hồng
- `PUT /api/commissions/:id/approve` - Duyệt hoa hồng
- `PUT /api/commissions/:id/reject` - Từ chối hoa hồng
- `PUT /api/commissions/:id/pay` - Thanh toán hoa hồng

### Commission Configurations
- `GET /api/commission-configs` - Lấy cấu hình hoa hồng
- `PUT /api/commission-configs` - Cập nhật cấu hình hoa hồng

### Analytics
- `GET /api/analytics/payments` - Lấy thống kê về thanh toán
- `GET /api/analytics/commissions` - Lấy thống kê về hoa hồng
- `GET /api/analytics/cash-flow` - Lấy thống kê về dòng tiền
