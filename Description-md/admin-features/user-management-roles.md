# User Management & Roles — IONEXUS Admin

## Mục tiêu
Cung cấp hệ thống quản lý người dùng và phân quyền toàn diện, giúp kiểm soát quyền truy cập vào các tính năng của hệ thống, đảm bảo an toàn và hiệu quả trong vận hành.

## Tính năng chính

### 1. Quản lý Người dùng
- **Danh sách người dùng**:
  - Tên người dùng
  - Email
  - Vai trò (role)
  - Trạng thái (active, inactive, locked)
  - Ngày tạo
  - Lần đăng nhập cuối
  - Đơn vị/Phòng ban
- **Bộ lọc và tìm kiếm**:
  - Lọc theo vai trò, trạng thái, đơn vị
  - Tìm kiếm theo tên, email
- **Quản lý tài khoản**:
  - Tạo tài khoản mới
  - Chỉnh sửa thông tin tài khoản
  - Kích hoạt/Vô hiệu hóa tài khoản
  - Khóa/Mở khóa tài khoản
  - Đặt lại mật khẩu
- **Nhập/Xuất người dùng**:
  - Nhập danh sách người dùng từ file CSV/Excel
  - Xuất danh sách người dùng ra file CSV/Excel

### 2. Hồ sơ Người dùng
- **Thông tin cá nhân**:
  - Tên đầy đủ
  - Email
  - Số điện thoại
  - Địa chỉ
  - Ngày sinh
  - Ảnh đại diện
- **Thông tin công việc**:
  - Chức danh
  - Phòng ban
  - Người quản lý
  - Ngày bắt đầu làm việc
- **Thông tin tài khoản**:
  - Tên đăng nhập
  - Vai trò
  - Quyền hạn
  - Trạng thái tài khoản
- **Lịch sử hoạt động**:
  - Lịch sử đăng nhập
  - Các thay đổi thông tin
  - Các hoạt động chính

### 3. Quản lý Vai trò (Roles)
- **Danh sách vai trò**:
  - Tên vai trò
  - Mô tả
  - Số lượng người dùng
  - Ngày tạo
  - Ngày cập nhật
- **Quản lý vai trò**:
  - Tạo vai trò mới
  - Chỉnh sửa vai trò
  - Xóa vai trò
  - Sao chép vai trò
- **Phân quyền cho vai trò**:
  - Phân quyền theo module
  - Phân quyền theo chức năng
  - Phân quyền theo hành động (xem, thêm, sửa, xóa)
  - Phân quyền theo dữ liệu

### 4. Quản lý Quyền (Permissions)
- **Danh sách quyền**:
  - Tên quyền
  - Mô tả
  - Module liên quan
  - Loại quyền (xem, thêm, sửa, xóa)
- **Quản lý quyền**:
  - Tạo quyền mới
  - Chỉnh sửa quyền
  - Xóa quyền
  - Nhóm quyền
- **Ma trận phân quyền**:
  - Hiển thị quyền theo vai trò
  - Hiển thị quyền theo module
  - Hiển thị quyền theo người dùng
  - So sánh quyền giữa các vai trò

### 5. Quản lý Nhóm (Groups)
- **Danh sách nhóm**:
  - Tên nhóm
  - Mô tả
  - Số lượng thành viên
  - Người quản lý nhóm
- **Quản lý nhóm**:
  - Tạo nhóm mới
  - Chỉnh sửa nhóm
  - Xóa nhóm
  - Thêm/Xóa thành viên
- **Phân quyền cho nhóm**:
  - Gán vai trò cho nhóm
  - Phân quyền đặc biệt cho nhóm
  - Phân quyền theo dữ liệu cho nhóm

### 6. Quản lý Phòng ban
- **Danh sách phòng ban**:
  - Tên phòng ban
  - Mô tả
  - Trưởng phòng
  - Số lượng nhân viên
- **Quản lý phòng ban**:
  - Tạo phòng ban mới
  - Chỉnh sửa phòng ban
  - Xóa phòng ban
  - Thêm/Xóa nhân viên
- **Cấu trúc tổ chức**:
  - Hiển thị cấu trúc phòng ban
  - Quản lý cấp bậc phòng ban
  - Quản lý mối quan hệ giữa các phòng ban

### 7. Bảo mật và Kiểm soát truy cập
- **Chính sách mật khẩu**:
  - Độ phức tạp mật khẩu
  - Thời hạn mật khẩu
  - Lịch sử mật khẩu
  - Khóa tài khoản sau số lần đăng nhập sai
- **Xác thực hai yếu tố (2FA)**:
  - Bật/Tắt 2FA
  - Phương thức 2FA (SMS, email, ứng dụng)
  - Quản lý thiết bị tin cậy
- **Quản lý phiên đăng nhập**:
  - Xem phiên đăng nhập hiện tại
  - Đăng xuất từ xa
  - Giới hạn số lượng phiên đăng nhập
  - Thời gian hết hạn phiên

### 8. Kiểm toán và Nhật ký
- **Nhật ký hoạt động**:
  - Đăng nhập/Đăng xuất
  - Thay đổi thông tin
  - Thay đổi quyền
  - Các hành động quan trọng
- **Báo cáo kiểm toán**:
  - Báo cáo hoạt động người dùng
  - Báo cáo thay đổi quyền
  - Báo cáo truy cập
  - Báo cáo vi phạm
- **Cảnh báo và thông báo**:
  - Cảnh báo hoạt động đáng ngờ
  - Thông báo thay đổi quyền
  - Thông báo khóa/mở khóa tài khoản
  - Thông báo đăng nhập từ thiết bị lạ

## Wireframe

### Danh sách Người dùng
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Users                                             [+ Add New User]      │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Role ▼      │ │ Status ▼    │ │ Department ▼           │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Name         │ Email           │ Role        │ Status    │ Last Login│ │
│ ├─────────────┼─────────────────┼─────────────┼──────────┼───────────┤ │
│ │ John Admin   │ admin@mail.com  │ Super Admin │ Active    │ Today      │ │
│ ├─────────────┼─────────────────┼─────────────┼──────────┼───────────┤ │
│ │ Sarah Manager│ sarah@mail.com  │ Sales Mgr   │ Active    │ Yesterday  │ │
│ ├─────────────┼─────────────────┼─────────────┼──────────┼───────────┤ │
│ │ David Agent  │ david@mail.com  │ Agent       │ Active    │ 3 days ago │ │
│ ├─────────────┼─────────────────┼─────────────┼──────────┼───────────┤ │
│ │ Mike Support │ mike@mail.com   │ Support     │ Inactive  │ 2 weeks ago│ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 48 users                         [1] [2] [3] ... [12] > │
└─────────────────────────────────────────────────────────────────────────┘
```

### Hồ sơ Người dùng
```
┌─────────────────────────────────────────────────────────────────────────┐
│ < Back to Users                         [Edit] [Deactivate] [Reset PWD] │
├─────────────────────────────────────────────────────────────────────────┤
│ John Admin                                                              │
│                                                                         │
│ ┌───────────┬───────────┬───────────┬───────────┬───────────┐           │
│ │ Profile   │ Roles     │ Activity  │ Security  │ Settings  │           │
│ └───────────┴───────────┴───────────┴───────────┴───────────┘           │
│                                                                         │
│ ┌─────────────────────────┐  ┌─────────────────────────────────────┐    │
│ │                         │  │ Personal Information                │    │
│ │                         │  │ ┌───────────────┬─────────────────┐ │    │
│ │                         │  │ │ Full Name     │ John Admin      │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │      Profile Photo      │  │ │ Email         │ admin@mail.com  │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Phone         │ +1234567890     │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Address       │ 123 Admin St.   │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ └─────────────────────────┘  │ │ Birth Date    │ Jan 15, 1985    │ │    │
│                              │ └───────────────┴─────────────────┘ │    │
│ Status: Active               └─────────────────────────────────────┘    │
│ Last Login: Today, 09:45 AM                                             │
│ Created: Mar 10, 2022                                                   │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────┐     │
│ │ Work Information                                                │     │
│ │                                                                 │     │
│ │ Department: Administration                                       │     │
│ │ Position: System Administrator                                   │     │
│ │ Manager: -                                                       │     │
│ │ Start Date: Mar 10, 2022                                         │     │
│ │                                                                 │     │
│ └─────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Quản lý Vai trò
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Roles                                             [+ Add New Role]      │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────────────────┐                                 │
│ │ Search  │ │ Module ▼                │                                 │
│ └─────────┘ └─────────────────────────┘                                 │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Role Name     │ Description          │ Users      │ Last Updated    │ │
│ ├──────────────┼─────────────────────┼───────────┼────────────────┤ │
│ │ Super Admin   │ Full system access   │ 2         │ 1 month ago     │ │
│ ├──────────────┼─────────────────────┼───────────┼────────────────┤ │
│ │ Sales Manager │ Sales team management│ 5         │ 2 weeks ago     │ │
│ ├──────────────┼─────────────────────┼───────────┼────────────────┤ │
│ │ Agent         │ Property listings    │ 25        │ 1 week ago      │ │
│ ├──────────────┼─────────────────────┼───────────┼────────────────┤ │
│ │ Support       │ Customer support     │ 8         │ 3 days ago      │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 10 roles                                 [1] [2] [3] >   │
└─────────────────────────────────────────────────────────────────────────┘
```

### Phân quyền cho Vai trò
```
┌─────────────────────────────────────────────────────────────────────────┐
│ < Back to Roles                                        [Save] [Cancel]  │
├─────────────────────────────────────────────────────────────────────────┤
│ Edit Role: Sales Manager                                                │
│                                                                         │
│ ┌───────────┬───────────┬───────────┬───────────┐                       │
│ │ Details   │ Permissions│ Users    │ History   │                       │
│ └───────────┴───────────┴───────────┴───────────┘                       │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Role Information                                                   │ │
│ │                                                                     │ │
│ │ Name: Sales Manager                                                 │ │
│ │ Description: Manages sales team and their activities                │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Permissions                                                        │ │
│ │                                                                     │ │
│ │ Module      │ View       │ Create     │ Edit       │ Delete     │ │
│ ├────────────┼───────────┼───────────┼───────────┼───────────┤ │
│ │ Dashboard   │ ☑          │ ☐          │ ☐          │ ☐          │ │
│ ├────────────┼───────────┼───────────┼───────────┼───────────┤ │
│ │ Users       │ ☑          │ ☑          │ ☑          │ ☐          │ │
│ ├────────────┼───────────┼───────────┼───────────┼───────────┤ │
│ │ Properties  │ ☑          │ ☑          │ ☑          │ ☑          │ │
│ ├────────────┼───────────┼───────────┼───────────┼───────────┤ │
│ │ Transactions│ ☑          │ ☑          │ ☑          │ ☐          │ │
│ ├────────────┼───────────┼───────────┼───────────┼───────────┤ │
│ │ Reports     │ ☑          │ ☑          │ ☐          │ ☐          │ │
│ ├────────────┼───────────┼───────────┼───────────┼───────────┤ │
│ │ Settings    │ ☐          │ ☐          │ ☐          │ ☐          │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Data Access                                                        │ │
│ │                                                                     │ │
│ │ ○ All Data                                                          │ │
│ │ ● Department Data                                                   │ │
│ │ ○ Own Data Only                                                     │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### Nhật ký Hoạt động
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Activity Log                                       [Export] [Filter]    │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────┐ ┌─────────────────────────┐ ┌────────────┐  │
│ │ User:                   │ │ Action Type:            │ │ Date:      │  │
│ │ [All Users        ▼]    │ │ [All Actions      ▼]    │ │ [Last 7d ▼]│  │
│ └─────────────────────────┘ └─────────────────────────┘ └────────────┘  │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Time        │ User         │ Action            │ Details           │ │
│ ├────────────┼──────────────┼──────────────────┼───────────────────┤ │
│ │ Today      │ John Admin   │ User Created      │ Created user      │ │
│ │ 10:30 AM   │              │                  │ "Mike Support"     │ │
│ ├────────────┼──────────────┼──────────────────┼───────────────────┤ │
│ │ Today      │ Sarah Manager│ Role Updated      │ Updated "Agent"   │ │
│ │ 09:15 AM   │              │                  │ role permissions   │ │
│ ├────────────┼──────────────┼──────────────────┼───────────────────┤ │
│ │ Yesterday  │ John Admin   │ Login            │ Successful login   │ │
│ │ 04:45 PM   │              │                  │ from 192.168.1.5   │ │
│ ├────────────┼──────────────┼──────────────────┼───────────────────┤ │
│ │ Yesterday  │ David Agent  │ Password Reset   │ Password reset     │ │
│ │ 02:30 PM   │              │                  │ requested          │ │
│ ├────────────┼──────────────┼──────────────────┼───────────────────┤ │
│ │ 2 days ago │ System       │ User Locked      │ User "Tom User"    │ │
│ │ 11:20 AM   │              │                  │ locked after 5     │ │
│ │            │              │                  │ failed attempts    │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-5 of 128 activities                   [1] [2] [3] ... [26] > │
└─────────────────────────────────────────────────────────────────────────┘
```

## Responsive Design

### Desktop (>1200px)
- Hiển thị đầy đủ bảng dữ liệu
- Hiển thị ma trận phân quyền đầy đủ
- Layout 2 cột cho hồ sơ người dùng

### Tablet (768px - 1199px)
- Thu gọn bảng dữ liệu, ẩn một số cột ít quan trọng
- Ma trận phân quyền có thể scroll ngang
- Layout 1 cột cho hồ sơ người dùng

### Mobile (<768px)
- Hiển thị dạng card thay vì bảng
- Ma trận phân quyền được thu gọn, hiển thị theo module
- Các tab được hiển thị dạng accordion

## Quyền truy cập
- **Super Admin**: Toàn quyền quản lý người dùng, vai trò và phân quyền
- **Admin**: Quyền quản lý người dùng và phân quyền trong phạm vi được cho phép
- **Manager**: Quyền quản lý người dùng trong phòng ban của mình
- **User**: Chỉ có quyền xem và chỉnh sửa thông tin cá nhân

## API Endpoints

### Users
- `GET /api/users` - Lấy danh sách người dùng
- `GET /api/users/:id` - Lấy chi tiết người dùng
- `POST /api/users` - Tạo người dùng mới
- `PUT /api/users/:id` - Cập nhật người dùng
- `DELETE /api/users/:id` - Xóa người dùng
- `PUT /api/users/:id/activate` - Kích hoạt người dùng
- `PUT /api/users/:id/deactivate` - Vô hiệu hóa người dùng
- `POST /api/users/:id/reset-password` - Đặt lại mật khẩu

### Roles
- `GET /api/roles` - Lấy danh sách vai trò
- `GET /api/roles/:id` - Lấy chi tiết vai trò
- `POST /api/roles` - Tạo vai trò mới
- `PUT /api/roles/:id` - Cập nhật vai trò
- `DELETE /api/roles/:id` - Xóa vai trò
- `GET /api/roles/:id/permissions` - Lấy quyền của vai trò
- `PUT /api/roles/:id/permissions` - Cập nhật quyền của vai trò

### Permissions
- `GET /api/permissions` - Lấy danh sách quyền
- `GET /api/permissions/:id` - Lấy chi tiết quyền
- `POST /api/permissions` - Tạo quyền mới
- `PUT /api/permissions/:id` - Cập nhật quyền
- `DELETE /api/permissions/:id` - Xóa quyền

### Groups
- `GET /api/groups` - Lấy danh sách nhóm
- `GET /api/groups/:id` - Lấy chi tiết nhóm
- `POST /api/groups` - Tạo nhóm mới
- `PUT /api/groups/:id` - Cập nhật nhóm
- `DELETE /api/groups/:id` - Xóa nhóm
- `PUT /api/groups/:id/members` - Cập nhật thành viên nhóm

### Departments
- `GET /api/departments` - Lấy danh sách phòng ban
- `GET /api/departments/:id` - Lấy chi tiết phòng ban
- `POST /api/departments` - Tạo phòng ban mới
- `PUT /api/departments/:id` - Cập nhật phòng ban
- `DELETE /api/departments/:id` - Xóa phòng ban
- `GET /api/departments/:id/users` - Lấy người dùng trong phòng ban

### Activity Log
- `GET /api/activity-logs` - Lấy nhật ký hoạt động
- `GET /api/activity-logs/:id` - Lấy chi tiết nhật ký hoạt động
- `GET /api/users/:id/activity-logs` - Lấy nhật ký hoạt động của người dùng
