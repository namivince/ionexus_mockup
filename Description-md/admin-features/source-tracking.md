# Source Tracking (UTM/Marketing) — IONEXUS Admin

## Mục tiêu
Cung cấp hệ thống theo dõi nguồn traffic và hiệu quả của các chiến dịch marketing, giúp phân tích ROI của các kênh marketing và tối ưu hóa chiến lược thu hút khách hàng.

## Tính năng chính

### 1. Theo dõi UTM Parameters
- **Theo dõi các tham số UTM**:
  - UTM Source (nguồn traffic)
  - UTM Medium (kênh marketing)
  - UTM Campaign (chiến dịch)
  - UTM Content (nội dung quảng cáo)
  - UTM Term (từ khóa)
- **Tạo và quản lý UTM links**:
  - Tạo UTM links tự động
  - Quản lý danh sách UTM links
  - Theo dõi hiệu suất của từng link
- **Phân tích UTM data**:
  - Phân tích traffic theo nguồn
  - Phân tích conversion theo chiến dịch
  - So sánh hiệu suất giữa các kênh marketing
  - Theo dõi xu hướng theo thời gian

### 2. Quản lý Chiến dịch Marketing
- **Danh sách chiến dịch**:
  - Tên chiến dịch
  - Loại chiến dịch
  - Kênh marketing
  - Ngày bắt đầu
  - Ngày kết thúc
  - Trạng thái
  - Ngân sách
  - ROI
- **Quản lý chiến dịch**:
  - Tạo chiến dịch mới
  - Chỉnh sửa chiến dịch
  - Dừng/Tiếp tục chiến dịch
  - Đánh giá hiệu quả chiến dịch
- **Theo dõi chi phí**:
  - Chi phí theo chiến dịch
  - Chi phí theo kênh
  - Chi phí theo ngày/tuần/tháng
  - So sánh chi phí với ngân sách

### 3. Phân tích Kênh Marketing
- **Danh sách kênh**:
  - Tên kênh
  - Loại kênh
  - Số lượng traffic
  - Số lượng leads
  - Số lượng conversions
  - Chi phí
  - ROI
- **Phân tích kênh**:
  - Hiệu suất của từng kênh
  - So sánh giữa các kênh
  - Xu hướng hiệu suất theo thời gian
  - Đề xuất phân bổ ngân sách
- **Phân loại kênh**:
  - Organic Search
  - Paid Search
  - Social Media
  - Email Marketing
  - Referral
  - Direct
  - Display Ads
  - Affiliate

### 4. Theo dõi Conversion
- **Conversion funnel**:
  - Visitor → Lead → Qualified Lead → Customer
  - Tỷ lệ chuyển đổi qua từng giai đoạn
  - Điểm nghẽn trong quy trình chuyển đổi
  - So sánh conversion funnel giữa các kênh
- **Conversion tracking**:
  - Theo dõi các sự kiện conversion
  - Gán giá trị cho mỗi conversion
  - Theo dõi conversion theo nguồn
  - Theo dõi conversion theo thiết bị
- **Attribution models**:
  - First Touch Attribution
  - Last Touch Attribution
  - Linear Attribution
  - Position Based Attribution
  - Time Decay Attribution

### 5. Phân tích Hành vi Người dùng
- **Hành trình khách hàng**:
  - Các trang đã xem
  - Thời gian trên trang
  - Tỷ lệ thoát
  - Hành động đã thực hiện
- **Phân đoạn người dùng**:
  - Theo nguồn traffic
  - Theo thiết bị
  - Theo vị trí địa lý
  - Theo hành vi
- **Heatmaps và Recordings**:
  - Heatmaps click
  - Heatmaps scroll
  - Heatmaps move
  - Session recordings

### 6. Tích hợp với các nền tảng Marketing
- **Google Analytics**:
  - Đồng bộ dữ liệu với Google Analytics
  - Import dữ liệu từ Google Analytics
  - So sánh với dữ liệu nội bộ
- **Facebook Ads**:
  - Theo dõi hiệu suất quảng cáo Facebook
  - Import dữ liệu chiến dịch
  - Phân tích ROI của quảng cáo Facebook
- **Google Ads**:
  - Theo dõi hiệu suất quảng cáo Google
  - Import dữ liệu chiến dịch
  - Phân tích ROI của quảng cáo Google
- **Email Marketing Platforms**:
  - Tích hợp với Mailchimp, SendGrid, v.v.
  - Theo dõi hiệu suất email campaigns
  - Phân tích conversion từ email

### 7. Báo cáo và Phân tích
- **Báo cáo tổng quan**:
  - Tổng traffic theo nguồn
  - Tổng leads theo nguồn
  - Tổng conversions theo nguồn
  - ROI theo nguồn
- **Báo cáo chi tiết**:
  - Báo cáo theo chiến dịch
  - Báo cáo theo kênh
  - Báo cáo theo thời gian
  - Báo cáo theo vị trí địa lý
- **Báo cáo ROI**:
  - Chi phí thu hút khách hàng (CAC)
  - Giá trị vòng đời khách hàng (LTV)
  - Thời gian hoàn vốn
  - ROI theo kênh/chiến dịch
- **Báo cáo tùy chỉnh**:
  - Tạo báo cáo tùy chỉnh
  - Lập lịch gửi báo cáo
  - Xuất báo cáo (PDF, Excel, CSV)
  - Chia sẻ báo cáo

## Wireframe

### Dashboard Theo dõi Nguồn
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Source Tracking Dashboard                         [Export] [Customize]  │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────┐ ┌─────────────────────────┐ ┌────────────┐  │
│ │ Date Range:             │ │ Campaign:               │ │ Channel:   │  │
│ │ [Last 30 Days ▼]        │ │ [All Campaigns ▼]       │ │ [All    ▼] │  │
│ └─────────────────────────┘ └─────────────────────────┘ └────────────┘  │
│                                                                         │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────┐ │
│ │                 │ │                 │ │                 │ │         │ │
│ │   Traffic       │ │    Leads        │ │  Conversions   │ │   ROI   │ │
│ │   12,458        │ │     256         │ │      48        │ │  325%   │ │
│ │   ▲ 18% MoM     │ │   ▲ 22% MoM     │ │   ▲ 15% MoM    │ │  ▲ 12%  │ │
│ │                 │ │                 │ │                 │ │         │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Traffic by Source                                                  │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │     Traffic by Source Chart                                         │ │
│ │     (Bar Chart)                                                     │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────┐       ┌─────────────────────────────┐   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │     Conversion by Campaign  │       │     Cost per Acquisition    │   │
│ │     (Pie Chart)             │       │     (Line Chart)            │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ └─────────────────────────────┘       └─────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

### Quản lý UTM Links
```
┌─────────────────────────────────────────────────────────────────────────┐
│ UTM Links                                          [+ Create UTM Link]  │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Campaign ▼  │ │ Medium ▼    │ │ Date Range ▼           │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Name         │ URL             │ Campaign   │ Clicks   │ Conversions│ │
│ ├─────────────┼─────────────────┼───────────┼──────────┼───────────┤ │
│ │ FB Q3 Promo  │ /landing/promo  │ Q3Promo    │ 1,245    │ 28        │ │
│ ├─────────────┼─────────────────┼───────────┼──────────┼───────────┤ │
│ │ Google Ads   │ /properties     │ GoogleAds  │ 856      │ 15        │ │
│ ├─────────────┼─────────────────┼───────────┼──────────┼───────────┤ │
│ │ Email Blast  │ /special-offer  │ EmailJuly  │ 532      │ 12        │ │
│ ├─────────────┼─────────────────┼───────────┼──────────┼───────────┤ │
│ │ IG Stories   │ /new-launch     │ IGLaunch   │ 423      │ 8         │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 24 UTM links                      [1] [2] [3] ... [6] > │
└─────────────────────────────────────────────────────────────────────────┘
```

### Tạo UTM Link
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Create UTM Link                                     [Save] [Cancel]     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Basic Information                                                  │ │
│ │                                                                     │ │
│ │ Link Name:      [Summer Promotion Facebook Ad                    ]  │ │
│ │ Base URL:       [https://ionexus.com                             ]  │ │
│ │ Landing Page:   [/properties/palm-heights                        ]  │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ UTM Parameters                                                     │ │
│ │                                                                     │ │
│ │ Campaign Source: [facebook                                       ]  │ │
│ │ Campaign Medium: [social                                         ]  │ │
│ │ Campaign Name:   [summer_promo_2023                              ]  │ │
│ │ Campaign Term:   [luxury_properties                              ]  │ │
│ │ Campaign Content:[carousel_ad_1                                  ]  │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Generated URL                                                      │ │
│ │                                                                     │ │
│ │ https://ionexus.com/properties/palm-heights?utm_source=facebook&   │ │
│ │ utm_medium=social&utm_campaign=summer_promo_2023&utm_term=         │ │
│ │ luxury_properties&utm_content=carousel_ad_1                         │ │
│ │                                                                     │ │
│ │ [Copy URL]                                                          │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Campaign Association                                               │ │
│ │                                                                     │ │
│ │ Associate with Campaign: [Summer Promotion 2023              ▼]    │ │
│ │ Budget: $5,000                                                      │ │
│ │ Start Date: Jun 1, 2023                                             │ │
│ │ End Date: Aug 31, 2023                                              │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### Phân tích Chiến dịch
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Campaign Analysis: Summer Promotion 2023           [Export] [Share]     │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────┐ ┌─────────────────────────┐ ┌────────────┐  │
│ │ Date Range:             │ │ Channel:                │ │ Compare:   │  │
│ │ [Jun 1 - Aug 31, 2023 ▼]│ │ [All Channels ▼]        │ │ [None   ▼] │  │
│ └─────────────────────────┘ └─────────────────────────┘ └────────────┘  │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Campaign Performance                                               │ │
│ │                                                                     │ │
│ │ Budget: $5,000                                                      │ │
│ │ Spent: $4,850 (97%)                                                 │ │
│ │ Traffic: 8,245                                                      │ │
│ │ Leads: 156                                                          │ │
│ │ Conversions: 32                                                     │ │
│ │ Revenue: $128,000                                                   │ │
│ │ ROI: 2,539%                                                         │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Performance by Channel                                             │ │
│ │                                                                     │ │
│ │ Channel    │ Traffic │ Leads │ Conv. │ Cost   │ CPA    │ ROI      │ │
│ ├───────────┼─────────┼───────┼───────┼────────┼────────┼──────────┤ │
│ │ Facebook   │ 3,245   │ 68    │ 15    │ $2,000 │ $133   │ 1,875%   │ │
│ ├───────────┼─────────┼───────┼───────┼────────┼────────┼──────────┤ │
│ │ Google     │ 2,856   │ 45    │ 10    │ $1,500 │ $150   │ 1,667%   │ │
│ ├───────────┼─────────┼───────┼───────┼────────┼────────┼──────────┤ │
│ │ Instagram  │ 1,532   │ 32    │ 5     │ $1,000 │ $200   │ 1,000%   │ │
│ ├───────────┼─────────┼───────┼───────┼────────┼────────┼──────────┤ │
│ │ Email      │ 612     │ 11    │ 2     │ $350   │ $175   │ 1,143%   │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────┐       ┌─────────────────────────────┐   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │     Conversion Funnel       │       │     Daily Performance       │   │
│ │     (Funnel Chart)          │       │     (Line Chart)            │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ └─────────────────────────────┘       └─────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

### Attribution Models
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Attribution Models                                  [Export] [Customize]│
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────┐ ┌─────────────────────────┐ ┌────────────┐  │
│ │ Date Range:             │ │ Conversion Type:        │ │ Compare:   │  │
│ │ [Last 30 Days ▼]        │ │ [All Conversions ▼]     │ │ [Models ▼] │  │
│ └─────────────────────────┘ └─────────────────────────┘ └────────────┘  │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Attribution Model Comparison                                       │ │
│ │                                                                     │ │
│ │ Model          │ Facebook │ Google  │ Instagram │ Email   │ Direct │ │
│ ├────────────────┼──────────┼─────────┼───────────┼─────────┼────────┤ │
│ │ First Touch    │ 45%      │ 25%     │ 15%       │ 10%     │ 5%     │ │
│ ├────────────────┼──────────┼─────────┼───────────┼─────────┼────────┤ │
│ │ Last Touch     │ 30%      │ 35%     │ 10%       │ 15%     │ 10%    │ │
│ ├────────────────┼──────────┼─────────┼───────────┼─────────┼────────┤ │
│ │ Linear         │ 35%      │ 30%     │ 15%       │ 12%     │ 8%     │ │
│ ├────────────────┼──────────┼─────────┼───────────┼─────────┼────────┤ │
│ │ Position Based │ 38%      │ 32%     │ 12%       │ 13%     │ 5%     │ │
│ ├────────────────┼──────────┼─────────┼───────────┼─────────┼────────┤ │
│ │ Time Decay     │ 32%      │ 33%     │ 12%       │ 14%     │ 9%     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Customer Journey Analysis                                          │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │     Customer Journey Visualization                                  │ │
│ │     (Path Analysis)                                                 │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────┐       ┌─────────────────────────────┐   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │     Touch Point Analysis    │       │     Conversion Paths        │   │
│ │     (Bar Chart)             │       │     (Sankey Diagram)        │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ └─────────────────────────────┘       └─────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

## Responsive Design

### Desktop (>1200px)
- Hiển thị đầy đủ dashboard với layout nhiều cột
- Hiển thị tất cả các biểu đồ và báo cáo
- Các bảng dữ liệu hiển thị đầy đủ cột

### Tablet (768px - 1199px)
- Dashboard với layout 2 cột
- Các biểu đồ hiển thị theo chiều dọc
- Thu gọn bảng dữ liệu, ẩn một số cột ít quan trọng

### Mobile (<768px)
- Dashboard với layout 1 cột
- Các biểu đồ được thu nhỏ và có thể scroll ngang
- Hiển thị dạng card thay vì bảng cho dữ liệu

## Quyền truy cập
- **Super Admin**: Toàn quyền truy cập tất cả tính năng source tracking
- **Marketing Manager**: Quyền xem và quản lý tất cả chiến dịch và báo cáo
- **Marketing Staff**: Quyền xem và quản lý chiến dịch được phân công
- **Sales Manager**: Quyền xem báo cáo và phân tích
- **Sales/Agent**: Quyền xem báo cáo liên quan đến leads của mình

## API Endpoints

### UTM Links
- `GET /api/utm-links` - Lấy danh sách UTM links
- `GET /api/utm-links/:id` - Lấy chi tiết UTM link
- `POST /api/utm-links` - Tạo UTM link mới
- `PUT /api/utm-links/:id` - Cập nhật UTM link
- `DELETE /api/utm-links/:id` - Xóa UTM link

### Campaigns
- `GET /api/campaigns` - Lấy danh sách chiến dịch
- `GET /api/campaigns/:id` - Lấy chi tiết chiến dịch
- `POST /api/campaigns` - Tạo chiến dịch mới
- `PUT /api/campaigns/:id` - Cập nhật chiến dịch
- `DELETE /api/campaigns/:id` - Xóa chiến dịch
- `GET /api/campaigns/:id/performance` - Lấy hiệu suất của chiến dịch

### Channels
- `GET /api/channels` - Lấy danh sách kênh marketing
- `GET /api/channels/:id` - Lấy chi tiết kênh marketing
- `POST /api/channels` - Tạo kênh marketing mới
- `PUT /api/channels/:id` - Cập nhật kênh marketing
- `DELETE /api/channels/:id` - Xóa kênh marketing
- `GET /api/channels/:id/performance` - Lấy hiệu suất của kênh marketing

### Analytics
- `GET /api/analytics/sources` - Lấy phân tích theo nguồn
- `GET /api/analytics/campaigns` - Lấy phân tích theo chiến dịch
- `GET /api/analytics/conversions` - Lấy phân tích conversion
- `GET /api/analytics/attribution` - Lấy phân tích attribution
- `GET /api/analytics/roi` - Lấy phân tích ROI

### Integrations
- `GET /api/integrations` - Lấy danh sách tích hợp
- `GET /api/integrations/:id` - Lấy chi tiết tích hợp
- `POST /api/integrations` - Tạo tích hợp mới
- `PUT /api/integrations/:id` - Cập nhật tích hợp
- `DELETE /api/integrations/:id` - Xóa tích hợp
- `POST /api/integrations/:id/sync` - Đồng bộ dữ liệu từ tích hợp
