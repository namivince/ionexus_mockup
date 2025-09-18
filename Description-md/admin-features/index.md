# IONEXUS Admin Features

## Tổng quan
Tài liệu này tổng hợp tất cả các tính năng của hệ thống Admin IONEXUS, bao gồm mô tả chi tiết, wireframe và API endpoints cho từng tính năng.

## Danh sách tính năng

### 1. [Project Management](./project-management.md)
Quản lý dự án bất động sản, bao gồm thông tin dự án, unit availability và chính sách.

**Tính năng chính:**
- Quản lý danh sách dự án
- Chi tiết dự án
- Quản lý Unit
- Chính sách bán hàng
- Báo cáo dự án

### 2. [Lead & Customer Management](./lead-customer-management.md)
Quản lý khách hàng tiềm năng và khách hàng hiện tại, giúp theo dõi, phân loại và chuyển đổi leads.

**Tính năng chính:**
- Quản lý Leads
- Hồ sơ Lead
- Chuyển đổi Lead thành Customer
- Quản lý Customers
- Tự động hóa Marketing
- Báo cáo và Phân tích

### 3. [Search & Marketplace Listings](./search-marketplace-listings.md)
Quản lý các listing bất động sản trên marketplace, bao gồm tìm kiếm, đăng tin, phê duyệt và theo dõi hiệu suất.

**Tính năng chính:**
- Quản lý Listings
- Chi tiết Listing
- Phê duyệt Listings
- Quản lý Tìm kiếm
- Quản lý Featured Listings
- Báo cáo và Phân tích

### 4. [Booking & Transaction Flow](./booking-transaction-flow.md)
Quản lý quy trình đặt chỗ và giao dịch bất động sản, từ đặt cọc đến ký hợp đồng và thanh toán.

**Tính năng chính:**
- Quản lý Booking
- Chi tiết Booking
- Quản lý Giao dịch
- Chi tiết Giao dịch
- Quản lý Thanh toán
- Quản lý Hợp đồng
- Báo cáo và Phân tích

### 5. [Realtime Chat & Inquiry](./realtime-chat-inquiry.md)
Hệ thống chat và quản lý yêu cầu thông tin theo thời gian thực, giúp kết nối khách hàng với agents/sales.

**Tính năng chính:**
- Quản lý Chat
- Giao diện Chat
- Quản lý Inquiry
- Chi tiết Inquiry
- Chatbot và Tự động hóa
- Báo cáo và Phân tích

### 6. [Payment & Commission Tracking](./payment-commission-tracking.md)
Quản lý thanh toán và theo dõi hoa hồng, giúp theo dõi dòng tiền và tính toán hoa hồng cho agents/sales.

**Tính năng chính:**
- Quản lý Thanh toán
- Chi tiết Thanh toán
- Lịch thanh toán
- Quản lý Hoa hồng
- Chi tiết Hoa hồng
- Cấu hình Hoa hồng
- Báo cáo và Phân tích

### 7. [Reports & Dashboard](./reports-dashboard.md)
Hệ thống báo cáo và bảng điều khiển, giúp theo dõi hiệu suất kinh doanh và phân tích xu hướng thị trường.

**Tính năng chính:**
- Dashboard tổng quan
- Báo cáo Sales & Marketing
- Báo cáo Tài chính
- Báo cáo Dự án & Inventory
- Báo cáo Khách hàng
- Báo cáo Thị trường
- Tùy chỉnh Báo cáo

### 8. [User Management & Roles](./user-management-roles.md)
Quản lý người dùng và phân quyền, giúp kiểm soát quyền truy cập vào các tính năng của hệ thống.

**Tính năng chính:**
- Quản lý Người dùng
- Hồ sơ Người dùng
- Quản lý Vai trò (Roles)
- Quản lý Quyền (Permissions)
- Quản lý Nhóm (Groups)
- Quản lý Phòng ban
- Bảo mật và Kiểm soát truy cập
- Kiểm toán và Nhật ký

### 9. [Source Tracking (UTM/Marketing)](./source-tracking.md)
Theo dõi nguồn traffic và hiệu quả của các chiến dịch marketing, giúp phân tích ROI của các kênh marketing.

**Tính năng chính:**
- Theo dõi UTM Parameters
- Quản lý Chiến dịch Marketing
- Phân tích Kênh Marketing
- Theo dõi Conversion
- Phân tích Hành vi Người dùng
- Tích hợp với các nền tảng Marketing
- Báo cáo và Phân tích

### 10. [Document Upload / Legal](./document-upload-legal.md)
Quản lý tài liệu và pháp lý, giúp lưu trữ, tổ chức và quản lý các tài liệu quan trọng.

**Tính năng chính:**
- Quản lý Tài liệu
- Tải lên Tài liệu
- Xem và Chỉnh sửa Tài liệu
- Tổ chức Tài liệu
- Quản lý Hợp đồng
- Quản lý Tài liệu Pháp lý
- Bảo mật và Quyền truy cập
- Báo cáo và Phân tích

## Quyền truy cập

Hệ thống Admin IONEXUS có các vai trò người dùng sau:

- **Super Admin**: Toàn quyền truy cập và quản lý hệ thống
- **Admin**: Quyền quản lý hệ thống trong phạm vi được cho phép
- **Sales Manager**: Quyền quản lý team sales và các tính năng liên quan
- **Finance Manager**: Quyền quản lý tài chính và thanh toán
- **Marketing Manager**: Quyền quản lý marketing và chiến dịch
- **Agent/Broker**: Quyền quản lý listings và giao dịch của mình
- **Customer Support**: Quyền hỗ trợ khách hàng và xử lý inquiries

## Thiết kế Responsive

Tất cả các tính năng của Admin IONEXUS đều được thiết kế responsive, hỗ trợ các kích thước màn hình sau:

- **Desktop (>1200px)**: Hiển thị đầy đủ tất cả các tính năng
- **Tablet (768px - 1199px)**: Layout tối ưu cho màn hình vừa
- **Mobile (<768px)**: Layout tối ưu cho màn hình nhỏ

## API Endpoints

Mỗi tính năng đều có các API endpoints riêng, được mô tả chi tiết trong từng file mô tả tính năng.

## Công nghệ sử dụng

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **File Storage**: AWS S3
- **Realtime**: Socket.io
- **Analytics**: Google Analytics, Custom Analytics
