# Lead & Customer Management — IONEXUS Admin

## Mục tiêu
Cung cấp hệ thống quản lý khách hàng tiềm năng (leads) và khách hàng hiện tại, giúp theo dõi, phân loại và chuyển đổi leads thành khách hàng thực sự.

## Tính năng chính

### 1. Quản lý Leads
- **Danh sách leads**:
  - Tên lead
  - Email
  - Số điện thoại
  - Nguồn (website, quảng cáo, giới thiệu, v.v.)
  - Trạng thái (mới, đã liên hệ, đang theo đuổi, đã chuyển đổi, đã mất)
  - Mức độ quan tâm (thấp, trung bình, cao)
  - Ngày tạo
  - Người phụ trách (sales/agent)
- **Bộ lọc và tìm kiếm**:
  - Lọc theo trạng thái, nguồn, mức độ quan tâm, thời gian
  - Tìm kiếm theo tên, email, số điện thoại
- **Phân loại leads**:
  - Theo dự án quan tâm
  - Theo loại bất động sản quan tâm
  - Theo ngân sách
  - Theo khu vực quan tâm
- **Gán leads**:
  - Gán lead cho sales/agent
  - Tự động phân bổ leads
  - Theo dõi hiệu suất xử lý leads

### 2. Hồ sơ Lead
- **Thông tin cá nhân**:
  - Tên đầy đủ
  - Email
  - Số điện thoại
  - Địa chỉ
  - Ngày sinh
  - Nghề nghiệp
  - Thu nhập
- **Thông tin quan tâm**:
  - Dự án quan tâm
  - Loại bất động sản quan tâm
  - Ngân sách
  - Mục đích (để ở, đầu tư)
  - Khu vực quan tâm
- **Lịch sử tương tác**:
  - Các cuộc gọi
  - Emails
  - Cuộc họp
  - Ghi chú
- **Tài liệu**:
  - Hồ sơ đã gửi
  - Báo giá
  - Hợp đồng

### 3. Chuyển đổi Lead thành Customer
- **Quy trình chuyển đổi**:
  - Xác nhận thông tin
  - Xác minh khả năng tài chính
  - Tạo hồ sơ khách hàng
  - Liên kết với giao dịch
- **Theo dõi tỷ lệ chuyển đổi**:
  - Theo dự án
  - Theo sales/agent
  - Theo nguồn
  - Theo thời gian

### 4. Quản lý Customers
- **Danh sách khách hàng**:
  - Tên khách hàng
  - Loại khách hàng (cá nhân, doanh nghiệp)
  - Số điện thoại
  - Email
  - Số lượng giao dịch
  - Tổng giá trị giao dịch
  - Ngày trở thành khách hàng
- **Phân loại khách hàng**:
  - VIP
  - Thường xuyên
  - Mới
  - Không hoạt động
- **Lịch sử giao dịch**:
  - Các giao dịch đã hoàn thành
  - Các giao dịch đang xử lý
  - Các giao dịch đã hủy
- **Chương trình khách hàng thân thiết**:
  - Điểm thưởng
  - Cấp độ thành viên
  - Ưu đãi đặc biệt

### 5. Tự động hóa Marketing
- **Email marketing**:
  - Tạo chiến dịch email
  - Mẫu email tự động
  - Lịch gửi email
  - Theo dõi tỷ lệ mở email
- **SMS marketing**:
  - Tạo chiến dịch SMS
  - Mẫu tin nhắn
  - Lịch gửi tin nhắn
  - Theo dõi tỷ lệ phản hồi
- **Tự động hóa quy trình**:
  - Tự động gửi email chào mừng
  - Tự động gửi thông tin dự án
  - Tự động nhắc nhở follow-up
  - Tự động gửi báo giá

### 6. Báo cáo và Phân tích
- **Báo cáo leads**:
  - Số lượng leads mới
  - Tỷ lệ chuyển đổi
  - Thời gian xử lý trung bình
  - Phân bổ leads theo nguồn
- **Báo cáo khách hàng**:
  - Số lượng khách hàng mới
  - Giá trị khách hàng trung bình
  - Tỷ lệ giữ chân khách hàng
  - Phân bổ khách hàng theo loại
- **Phân tích hiệu suất**:
  - Hiệu suất của sales/agent
  - Hiệu quả của các chiến dịch marketing
  - ROI theo nguồn leads
  - Dự báo doanh số

## Wireframe

### Danh sách Leads
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Leads                                             [+ Add New Lead]      │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Status ▼    │ │ Source ▼    │ │ Assigned To ▼          │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Name         │ Phone      │ Status      │ Interest │ Created       │ │
│ ├─────────────┼────────────┼─────────────┼──────────┼──────────────┤ │
│ │ John Doe     │ 0901234567 │ New         │ High     │ Today         │ │
│ ├─────────────┼────────────┼─────────────┼──────────┼──────────────┤ │
│ │ Jane Smith   │ 0909876543 │ Contacted   │ Medium   │ Yesterday     │ │
│ ├─────────────┼────────────┼─────────────┼──────────┼──────────────┤ │
│ │ Bob Johnson  │ 0907654321 │ Following   │ High     │ 3 days ago    │ │
│ ├─────────────┼────────────┼─────────────┼──────────┼──────────────┤ │
│ │ Alice Brown  │ 0903456789 │ Converted   │ High     │ 1 week ago    │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 156 leads                     [1] [2] [3] ... [39] >    │
└─────────────────────────────────────────────────────────────────────────┘
```

### Hồ sơ Lead
```
┌─────────────────────────────────────────────────────────────────────────┐
│ < Back to Leads                                  [Edit] [Convert]       │
├─────────────────────────────────────────────────────────────────────────┤
│ John Doe                                                                │
│                                                                         │
│ ┌───────────┬───────────┬───────────┬───────────┬───────────┐           │
│ │ Overview  │ Interests │ Activity  │ Documents │ Notes     │           │
│ └───────────┴───────────┴───────────┴───────────┴───────────┘           │
│                                                                         │
│ ┌─────────────────────────┐  ┌─────────────────────────────────────┐    │
│ │                         │  │ Lead Details                        │    │
│ │                         │  │ ┌───────────────┬─────────────────┐ │    │
│ │                         │  │ │ Phone         │ 0901234567      │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │        Profile          │  │ │ Email         │ john@email.com  │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Status        │ New             │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Source        │ Website         │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ └─────────────────────────┘  │ │ Assigned To   │ David Agent     │ │    │
│                              │ └───────────────┴─────────────────┘ │    │
│ Lead Score: 85/100           └─────────────────────────────────────┘    │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────┐     │
│ │ Recent Activity                                                 │     │
│ │                                                                 │     │
│ │ Today - Email sent: "Palm Heights Project Information"          │     │
│ │ Yesterday - Phone call: Discussed budget and requirements       │     │
│ │ 3 days ago - Website visit: Viewed Palm Heights project page    │     │
│ │ 1 week ago - Form submission: Requested information             │     │
│ │                                                                 │     │
│ └─────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Danh sách Customers
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Customers                                      [+ Add New Customer]     │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Type ▼      │ │ Status ▼    │ │ Date Range ▼           │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Name         │ Type       │ Transactions │ Value     │ Status      │ │
│ ├─────────────┼────────────┼─────────────┼───────────┼────────────┤ │
│ │ Alice Brown  │ Individual │ 2           │ $520,000  │ Active     │ │
│ ├─────────────┼────────────┼─────────────┼───────────┼────────────┤ │
│ │ XYZ Corp     │ Corporate  │ 5           │ $2.1M     │ VIP        │ │
│ ├─────────────┼────────────┼─────────────┼───────────┼────────────┤ │
│ │ Tom Wilson   │ Individual │ 1           │ $320,000  │ New        │ │
│ ├─────────────┼────────────┼─────────────┼───────────┼────────────┤ │
│ │ Sarah Lee    │ Individual │ 3           │ $950,000  │ VIP        │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 78 customers                   [1] [2] [3] ... [20] >   │
└─────────────────────────────────────────────────────────────────────────┘
```

### Báo cáo Leads
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Lead Analytics                                 [Export] [Print] [Share] │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐             │
│ │                 │ │                 │ │                 │             │
│ │   New Leads     │ │ Conversion Rate │ │  Avg Response   │             │
│ │      156        │ │     24.5%       │ │    2.5 hrs      │             │
│ │   ▲ 12% MoM     │ │   ▲ 3.2% MoM    │ │   ▼ 15% MoM     │             │
│ │                 │ │                 │ │                 │             │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘             │
│                                                                         │
│ ┌─────────────────────────────┐       ┌─────────────────────────────┐   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │     Lead Source Chart       │       │     Conversion Funnel       │   │
│ │     (Pie Chart)             │       │     (Funnel Chart)          │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ └─────────────────────────────┘       └─────────────────────────────┘   │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Top Performing Agents                                              │ │
│ │                                                                     │ │
│ │ Agent Name    │ Leads Assigned │ Conversion Rate │ Avg Response Time│ │
│ ├──────────────┼────────────────┼────────────────┼──────────────────┤ │
│ │ David Agent   │ 45             │ 32.5%          │ 1.2 hrs          │ │
│ ├──────────────┼────────────────┼────────────────┼──────────────────┤ │
│ │ Sarah Agent   │ 38             │ 28.9%          │ 1.5 hrs          │ │
│ ├──────────────┼────────────────┼────────────────┼──────────────────┤ │
│ │ Michael Agent │ 42             │ 26.2%          │ 2.1 hrs          │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

## Responsive Design

### Desktop (>1200px)
- Hiển thị đầy đủ bảng dữ liệu
- Hiển thị tất cả các biểu đồ và báo cáo
- Layout 3 cột cho dashboard

### Tablet (768px - 1199px)
- Thu gọn bảng dữ liệu, ẩn một số cột ít quan trọng
- Layout 2 cột cho dashboard
- Các biểu đồ hiển thị theo chiều dọc

### Mobile (<768px)
- Hiển thị dạng card thay vì bảng
- Layout 1 cột cho tất cả các phần
- Biểu đồ được thu nhỏ và có thể scroll ngang

## Quyền truy cập
- **Super Admin**: Toàn quyền quản lý leads và customers
- **Sales Manager**: Quyền xem tất cả leads và customers, phân công leads
- **Sales/Agent**: Quyền xem và quản lý leads được phân công, xem thông tin customers liên quan

## API Endpoints

### Leads
- `GET /api/leads` - Lấy danh sách leads
- `GET /api/leads/:id` - Lấy chi tiết lead
- `POST /api/leads` - Tạo lead mới
- `PUT /api/leads/:id` - Cập nhật lead
- `DELETE /api/leads/:id` - Xóa lead
- `POST /api/leads/:id/convert` - Chuyển đổi lead thành customer

### Customers
- `GET /api/customers` - Lấy danh sách customers
- `GET /api/customers/:id` - Lấy chi tiết customer
- `POST /api/customers` - Tạo customer mới
- `PUT /api/customers/:id` - Cập nhật customer
- `DELETE /api/customers/:id` - Xóa customer

### Activities
- `GET /api/leads/:id/activities` - Lấy danh sách hoạt động của lead
- `POST /api/leads/:id/activities` - Thêm hoạt động mới cho lead
- `GET /api/customers/:id/activities` - Lấy danh sách hoạt động của customer
- `POST /api/customers/:id/activities` - Thêm hoạt động mới cho customer

### Analytics
- `GET /api/analytics/leads` - Lấy thống kê về leads
- `GET /api/analytics/conversions` - Lấy thống kê về tỷ lệ chuyển đổi
- `GET /api/analytics/agents` - Lấy thống kê về hiệu suất của agents
