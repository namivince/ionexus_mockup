# IONEXUS Developer Dashboard

## Mục tiêu
Trang Developer được thiết kế dành riêng cho các nhà phát triển dự án, cung cấp các công cụ cần thiết để quản lý dự án và tài liệu pháp lý một cách hiệu quả.

## Quyền truy cập
- **Developer**: Chỉ có quyền truy cập vào Project Management và Document Upload / Legal
- **Hạn chế**: Không thể truy cập vào các tính năng khác như Sales, Marketing, Finance

## Tính năng chính

### 1. Project Management
- **Quản lý dự án**: Tạo, chỉnh sửa, theo dõi tiến độ dự án
- **Quản lý Unit**: Thêm, cập nhật thông tin các unit trong dự án
- **Theo dõi tiến độ**: Monitor construction progress và milestones
- **Báo cáo dự án**: Tạo báo cáo tiến độ cho stakeholders

### 2. Document Upload / Legal
- **Quản lý tài liệu**: Upload, organize và manage project documents
- **Tài liệu pháp lý**: Quản lý giấy phép xây dựng, chứng nhận
- **Version control**: Theo dõi các phiên bản tài liệu
- **Compliance tracking**: Đảm bảo tuân thủ các quy định pháp lý

## Giao diện người dùng

### Dashboard Layout
```
┌─────────────────────────────────────────────────────────────────────────┐
│ IONEXUS Developer Dashboard                    [Profile] [Notifications] │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐                                                     │
│ │ [🏢] Dashboard   │  Main Content Area                                  │
│ │ [📊] Project     │                                                     │
│ │     Management   │  ┌─────────────────────────────────────────────┐   │
│ │ [📄] Document    │  │                                             │   │
│ │     Upload/Legal │  │         Dashboard Content                   │   │
│ │                  │  │                                             │   │
│ │                  │  │                                             │   │
│ │                  │  └─────────────────────────────────────────────┘   │
│ └─────────────────┘                                                     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Color Scheme
- **Primary Color**: #1e40af (Blue)
- **Secondary Color**: #059669 (Green)
- **Accent Color**: #dc2626 (Red for legal documents)
- **Background**: #f8fafc (Light gray)

### Navigation
- **Sidebar Navigation**: Fixed sidebar với 2 main sections
- **Breadcrumb**: Hiển thị current location
- **Quick Actions**: Floating action buttons cho common tasks

## Wireframes

### Developer Dashboard
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Developer Dashboard                             Welcome back, John Dev!  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐         │
│ │ Active      │ │ Total       │ │ Completed   │ │ Documents   │         │
│ │ Projects    │ │ Units       │ │ Units       │ │ Uploaded    │         │
│ │     8       │ │   1,245     │ │    856      │ │    342      │         │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘         │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Recent Projects                                                     │ │
│ │ ┌─────────────┬─────────────┬─────────────┬─────────────────────┐   │ │
│ │ │ Project     │ Status      │ Progress    │ Last Updated        │   │ │
│ │ ├─────────────┼─────────────┼─────────────┼─────────────────────┤   │ │
│ │ │ Palm Heights│ In Progress │ ████████░░  │ 2 hours ago         │   │ │
│ │ │ Sky Garden  │ Planning    │ ███░░░░░░░  │ 1 day ago           │   │ │
│ │ │ River View  │ Completed   │ ██████████  │ 1 week ago          │   │ │
│ │ └─────────────┴─────────────┴─────────────┴─────────────────────┘   │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Quick Actions                                                       │ │
│ │ [+ New Project] [📄 Upload Document] [📊 Generate Report]           │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### Project Management View
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Project Management                              [+ New Project]         │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐                             │
│ │ Search  │ │ Status ▼    │ │ Location ▼  │                             │
│ └─────────┘ └─────────────┘ └─────────────┘                             │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ┌─────────────┐                                                     │ │
│ │ │   Project   │  Palm Heights                                       │ │
│ │ │    Image    │  District 2, HCMC                                   │ │
│ │ │             │  Status: [In Progress]                              │ │
│ │ │             │  Progress: 75% ████████░░                           │ │
│ │ │             │  816 units • 364 sold                               │ │
│ │ └─────────────┘  [View Details] [Edit] [Upload Docs]                │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ┌─────────────┐                                                     │ │
│ │ │   Project   │  Sky Garden                                         │ │
│ │ │    Image    │  District 7, HCMC                                   │ │
│ │ │             │  Status: [Planning]                                 │ │
│ │ │             │  Progress: 30% ███░░░░░░░                           │ │
│ │ │             │  1240 units • 0 sold                                │ │
│ │ └─────────────┘  [View Details] [Edit] [Upload Docs]                │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### Document Upload / Legal View
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Document Upload / Legal                         [+ Upload Document]     │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌───────────┬───────────┬───────────┬───────────┐                       │
│ │ All Docs  │ Contracts │ Legal     │ Drawings  │                       │
│ └───────────┴───────────┴───────────┴───────────┘                       │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Document Name                │ Type     │ Size    │ Date     │ Status │ │
│ ├─────────────────────────────┼──────────┼─────────┼──────────┼────────┤ │
│ │ Construction Permit.pdf      │ Legal    │ 2.5 MB  │ Today    │ Active │ │
│ │ Building Plan - Tower A.dwg  │ Drawing  │ 15.2 MB │ 2d ago   │ Active │ │
│ │ Environmental Report.pdf     │ Legal    │ 8.1 MB  │ 1w ago   │ Active │ │
│ │ Material Specifications.xlsx │ Contract │ 1.2 MB  │ 3d ago   │ Active │ │
│ └─────────────────────────────┴──────────┴─────────┴──────────┴────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Upload New Document                                                 │ │
│ │                                                                     │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │                                                                 │ │ │
│ │ │     Drag & Drop Files Here                                      │ │ │
│ │ │                                                                 │ │ │
│ │ │     or [Browse Files]                                           │ │ │
│ │ │                                                                 │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                     │ │
│ │ Document Type: [Legal Document ▼]                                   │ │
│ │ Project: [Palm Heights ▼]                                           │ │
│ │ Description: [Enter description...]                                 │ │
│ │                                                                     │ │
│ │ [Cancel] [Upload Document]                                          │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

## Responsive Design

### Desktop (>1200px)
- Full sidebar navigation
- Grid layout cho project cards
- Detailed tables cho documents

### Tablet (768px - 1199px)
- Collapsible sidebar
- 2-column grid cho projects
- Simplified document view

### Mobile (<768px)
- Bottom navigation
- Single column layout
- Card-based document view

## Authentication & Security

### Login Flow
1. Developer login với credentials
2. System verify role = "Developer"
3. Redirect to Developer Dashboard
4. Restrict access to only 2 modules

### Permissions
- **Read/Write**: Project Management
- **Read/Write**: Document Upload / Legal
- **No Access**: All other admin features

## API Endpoints

### Authentication
- `POST /api/auth/developer/login` - Developer login
- `GET /api/auth/developer/profile` - Get developer profile
- `POST /api/auth/developer/logout` - Developer logout

### Projects (Developer Access)
- `GET /api/developer/projects` - Get developer's projects
- `GET /api/developer/projects/:id` - Get project details
- `POST /api/developer/projects` - Create new project
- `PUT /api/developer/projects/:id` - Update project
- `GET /api/developer/projects/:id/units` - Get project units

### Documents (Developer Access)
- `GET /api/developer/documents` - Get developer's documents
- `POST /api/developer/documents` - Upload document
- `GET /api/developer/documents/:id` - Get document details
- `PUT /api/developer/documents/:id` - Update document
- `DELETE /api/developer/documents/:id` - Delete document

## Technical Requirements

### Frontend
- React.js với Material-UI
- Responsive design
- Role-based routing
- File upload functionality

### Backend
- Node.js/Express
- Role-based authentication
- File storage (AWS S3)
- Document versioning

### Database
- MongoDB collections:
  - developers
  - developer_projects
  - developer_documents
  - project_units
