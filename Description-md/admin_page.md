# Admin Page — IONEXUS

## Mục tiêu
Trang quản trị dành cho Admin, cung cấp giao diện để quản lý toàn bộ hệ thống IONEXUS.

## Phân loại Admin
- **Super Admin**: Quyền cao nhất, có thể truy cập và quản lý mọi tính năng của hệ thống

## Bảng Tính năng theo Vai trò

| Tính năng | Developer | Sale (Sales Operation & Sale) | Partner (Agency & Individual) | End-user / Investor | Admin (Super Admin) |
|----------|-----------|------------------------------|------------------------------|-------------------|-------------------|
| Project Management (dự án, unit availability, chính sách) | Yes | Yes | Yes | No | Yes |
| Lead & Customer Management | No | Yes | Yes | Yes | Yes |
| Search & Marketplace Listings | No | Yes | Yes | Yes | Yes |
| Booking & Transaction Flow | No | Yes | Yes | Yes | Yes |
| Realtime Chat / Inquiry | No | Yes | Yes | Yes | Yes |
| Payment & Commission Tracking (basic) | No | Yes | Yes | Yes | Yes |
| Reports & Dashboard (basic) | No | Yes | Yes | Yes | Yes |
| User Management & Roles | No | No | No | No | Yes |
| Source Tracking (UTM/Marketing) | No | No | No | No | Yes |
| Document Upload / Legal placeholder | Yes | Yes | Yes | Yes | Yes |

## Layout trang Admin

### Header
- **Logo IONEXUS**: Click để về trang Admin Dashboard
- **Navigation Links**: Các menu chính của trang Admin
- **User Profile**: Hiển thị thông tin admin đang đăng nhập
- **Notifications**: Icon thông báo với badge hiển thị số lượng thông báo mới
- **Logout**: Nút đăng xuất khỏi hệ thống

### Sidebar
- **Dashboard**: Tổng quan về hệ thống
- **Project Management**: Quản lý dự án, unit availability, chính sách
- **User Management**: Quản lý người dùng
  - Developers
  - Sales
  - Partners
  - End-users / Investors
  - Admins
- **Property Management**: Quản lý bất động sản
  - All Properties
  - Pending Approval
  - Featured Properties
  - Reported Properties
- **Lead & Customer Management**: Quản lý khách hàng tiềm năng và hiện tại
- **Search & Marketplace Listings**: Quản lý danh sách bất động sản trên marketplace
- **Booking & Transaction Flow**: Quản lý quy trình đặt chỗ và giao dịch
- **Transaction Management**: Quản lý giao dịch
  - All Transactions
  - Pending Transactions
  - Completed Transactions
  - Cancelled Transactions
- **Realtime Chat / Inquiry**: Quản lý hệ thống chat và yêu cầu thông tin
- **Payment & Commission Tracking**: Theo dõi thanh toán và hoa hồng
- **Content Management**: Quản lý nội dung
  - Blog Posts
  - News
  - Pages
  - Media Library
- **Document Upload / Legal**: Quản lý tài liệu pháp lý
- **Settings**: Cài đặt hệ thống
  - General Settings
  - Email Templates
  - Notification Settings
  - Security Settings
  - API Configuration
- **Reports & Analytics**: Báo cáo và phân tích
  - User Analytics
  - Property Analytics
  - Transaction Analytics
  - Financial Reports
- **Source Tracking (UTM/Marketing)**: Theo dõi nguồn traffic marketing

### Main Content
- **Dashboard Overview**:
  - **Stats Cards**: Hiển thị các số liệu thống kê quan trọng
    - Total Users
    - Total Properties
    - Total Transactions
    - Revenue
  - **Recent Activities**: Danh sách các hoạt động gần đây
  - **Charts & Graphs**: Biểu đồ thống kê
    - User Growth
    - Property Listings
    - Transaction Volume
    - Revenue Trends
  - **Quick Actions**: Các hành động nhanh
    - Add New User
    - Add New Property
    - Approve Pending Properties
    - View Reports

## User Management

### User List
- **Search & Filter**: Tìm kiếm và lọc người dùng
- **User Table**: Bảng danh sách người dùng
  - User ID
  - Name
  - Email
  - Role
  - Status
  - Registration Date
  - Actions (View, Edit, Delete, Ban)
- **Pagination**: Phân trang danh sách người dùng
- **Export**: Xuất danh sách người dùng (CSV, Excel)

### User Detail
- **Profile Information**: Thông tin cá nhân
- **Activity Log**: Lịch sử hoạt động
- **Properties**: Danh sách bất động sản liên quan
- **Transactions**: Danh sách giao dịch
- **Notes**: Ghi chú của admin về người dùng

## Property Management

### Property List
- **Search & Filter**: Tìm kiếm và lọc bất động sản
- **Property Table**: Bảng danh sách bất động sản
  - Property ID
  - Title
  - Type
  - Location
  - Price
  - Status
  - Listed By
  - Date Added
  - Actions (View, Edit, Delete, Feature)
- **Pagination**: Phân trang danh sách bất động sản
- **Export**: Xuất danh sách bất động sản (CSV, Excel)

### Property Detail
- **Basic Information**: Thông tin cơ bản
- **Media**: Hình ảnh và video
- **Location**: Vị trí trên bản đồ
- **Features**: Các tính năng của bất động sản
- **Owner/Agent Information**: Thông tin chủ sở hữu/đại lý
- **Transaction History**: Lịch sử giao dịch
- **Admin Notes**: Ghi chú của admin

## Transaction Management

### Transaction List
- **Search & Filter**: Tìm kiếm và lọc giao dịch
- **Transaction Table**: Bảng danh sách giao dịch
  - Transaction ID
  - Property
  - Buyer
  - Seller
  - Amount
  - Status
  - Date
  - Actions (View, Edit, Cancel)
- **Pagination**: Phân trang danh sách giao dịch
- **Export**: Xuất danh sách giao dịch (CSV, Excel)

### Transaction Detail
- **Transaction Information**: Thông tin giao dịch
- **Property Information**: Thông tin bất động sản
- **Buyer Information**: Thông tin người mua
- **Seller Information**: Thông tin người bán
- **Payment Details**: Chi tiết thanh toán
- **Documents**: Tài liệu liên quan
- **Timeline**: Dòng thời gian của giao dịch
- **Admin Notes**: Ghi chú của admin

## Settings

### General Settings
- **Site Information**: Thông tin website
- **Contact Information**: Thông tin liên hệ
- **Social Media Links**: Liên kết mạng xã hội
- **SEO Settings**: Cài đặt SEO

### Email Templates
- **Template List**: Danh sách mẫu email
- **Template Editor**: Trình soạn thảo mẫu email
- **Test Email**: Gửi email thử nghiệm

### Notification Settings
- **Email Notifications**: Cài đặt thông báo qua email
- **Push Notifications**: Cài đặt thông báo đẩy
- **SMS Notifications**: Cài đặt thông báo qua SMS

### Security Settings
- **Password Policy**: Chính sách mật khẩu
- **Two-Factor Authentication**: Xác thực hai yếu tố
- **Session Management**: Quản lý phiên đăng nhập
- **IP Restrictions**: Hạn chế IP

### API Configuration
- **API Keys**: Quản lý khóa API
- **Webhooks**: Cấu hình webhooks
- **Rate Limiting**: Giới hạn tốc độ truy cập API

## Reports & Analytics

### User Analytics
- **User Growth**: Tăng trưởng người dùng
- **User Engagement**: Mức độ tương tác của người dùng
- **User Demographics**: Thông tin nhân khẩu học của người dùng

### Property Analytics
- **Property Views**: Lượt xem bất động sản
- **Property Inquiries**: Yêu cầu thông tin bất động sản
- **Popular Properties**: Bất động sản phổ biến
- **Property Categories**: Phân loại bất động sản

### Transaction Analytics
- **Transaction Volume**: Khối lượng giao dịch
- **Transaction Value**: Giá trị giao dịch
- **Transaction Success Rate**: Tỷ lệ thành công của giao dịch
- **Transaction Time**: Thời gian hoàn thành giao dịch

### Financial Reports
- **Revenue**: Doanh thu
- **Expenses**: Chi phí
- **Profit & Loss**: Lãi và lỗ
- **Projections**: Dự báo tài chính

## Tài khoản Admin mẫu

### Super Admin
- **Email**: superadmin@ionexus.com
- **Password**: 123456
- **Quyền**: Toàn quyền truy cập và quản lý hệ thống

## Luồng đăng nhập Admin

1. Người dùng chọn vai trò "Admin" trên trang đăng nhập
2. Nhập thông tin đăng nhập (email và mật khẩu)
3. Hệ thống xác thực thông tin đăng nhập
4. Nếu email là `superadmin@ionexus.com` và mật khẩu chính xác, hệ thống sẽ xác định đây là Super Admin
5. Chuyển hướng đến trang Dashboard của Admin
6. Hiển thị thông báo chào mừng với tên và vai trò của Admin

## Wireframe

```
┌─────────────────────────────────────────────────────────────────────────┐
│ IONEXUS Admin                                   [Notifications] [Profile]│
├─────────────┬───────────────────────────────────────────────────────────┤
│             │                                                           │
│  Dashboard  │                    Admin Dashboard                        │
│             │                                                           │
│  Users      │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│             │  │         │  │         │  │         │  │         │       │
│  Properties │  │  Users  │  │Properties│  │Transact.│  │ Revenue │       │
│             │  │  5,240  │  │  12,180 │  │  1,845  │  │ $2.4M   │       │
│  Transact.  │  │         │  │         │  │         │  │         │       │
│             │  └─────────┘  └─────────┘  └─────────┘  └─────────┘       │
│  Content    │                                                           │
│             │  Recent Activities                                        │
│  Settings   │  ┌─────────────────────────────────────────────────────┐  │
│             │  │ • John Doe added a new property (5 mins ago)        │  │
│  Reports    │  │ • New user registration: Sarah Smith (10 mins ago)  │  │
│             │  │ • Transaction #1234 completed (15 mins ago)         │  │
│             │  │ • Property #5678 updated by Agent Mike (20 mins ago)│  │
│             │  │ • New support ticket #9012 opened (25 mins ago)     │  │
│             │  └─────────────────────────────────────────────────────┘  │
│             │                                                           │
│             │  User Growth                         Property Listings    │
│             │  ┌─────────────────────────┐  ┌─────────────────────────┐ │
│             │  │                         │  │                         │ │
│             │  │                         │  │                         │ │
│             │  │      [Line Chart]       │  │       [Bar Chart]       │ │
│             │  │                         │  │                         │ │
│             │  │                         │  │                         │ │
│             │  └─────────────────────────┘  └─────────────────────────┘ │
│             │                                                           │
└─────────────┴───────────────────────────────────────────────────────────┘
```

## Responsive Design

### Desktop (>1200px)
- Full sidebar visible
- Dashboard hiển thị 4 stats cards trên một hàng
- Charts hiển thị 2 trên một hàng

### Tablet (768px - 1199px)
- Sidebar có thể thu gọn
- Dashboard hiển thị 2 stats cards trên một hàng
- Charts hiển thị 1 trên một hàng

### Mobile (<768px)
- Sidebar ẩn, hiển thị khi click vào hamburger menu
- Dashboard hiển thị 1 stats card trên một hàng
- Charts hiển thị 1 trên một hàng, chiều cao giảm

## Implementation Status

🔄 **In Progress:**
- Dashboard UI
- User Management
- Property Management

⏳ **Planned Features:**
- Project Management
- Lead & Customer Management
- Search & Marketplace Listings
- Booking & Transaction Flow
- Realtime Chat / Inquiry
- Payment & Commission Tracking
- Transaction Management
- Content Management
- Reports & Analytics
- Source Tracking (UTM/Marketing)
- Document Upload / Legal placeholder
- Advanced Filtering
- Export Data
- Bulk Actions
- Audit Logs
