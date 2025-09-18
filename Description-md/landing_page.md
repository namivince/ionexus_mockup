# Landing Page — IONEXUS

## Mục tiêu
Trang chủ công khai, tập trung vào tìm kiếm BĐS (giống Property Finder).

## Navigation
- **Logo IONEXUS**: Click để về trang chủ
- **Navigation Links**: 
  - **Buy (active)**: Trang chủ - hiển thị properties for sale
  - **Rent**: Chuyển đến trang thuê - properties for rent
  - **Commercial**: Trang BĐS thương mại - offices, retail, warehouses
  - **New Projects**: Trang dự án mới - off-plan developments
  - **Find Agent**: Trang tìm agent - danh sách real estate agents
- **User Nav**: Login (button) - mở modal đăng nhập
- **Active state**: 3px bottom border với màu primary (#1A237E)
- **Hover effects**: Color change + underline transition

## Hero Section
- Background: Image overlay với màu primary (#1A237E)
- Title: "Find Your Dream Property"
- Subtitle: "Search properties for sale and to rent in the most desirable locations"

## Search Section
- **Search card**: Floating card với negative margin (-48px) over hero
- **Shadow**: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
- **Tabset**: Buy | Rent | Commercial | New Projects
  - Border-bottom indicator (3px) cho active tab
  - Click để switch search mode
- **Search Input**: 
  - Placeholder: "Enter location, community, or building"
  - Focus state: Primary border + shadow glow
  - Auto-complete suggestions (future)
- **Search Button**: Primary blue, white text, 8px radius
- **Filter Chips**: 
  - Default: White background, black text, gray border
  - Hover: Primary blue background, white text
  - Click để mở filter modals

## Main Content

### Featured Properties Section
- **Layout**: CSS Grid 3 columns (responsive)
- **Property Cards** (12 total):
  - **Image**: 200px height, object-fit cover
  - **Badges**: Positioned absolute (top-left 12px)
    - **Featured**: #1A237E (primary blue)
    - **New**: #FF5252 (secondary red) 
    - **Exclusive**: #16A34A (success green)
    - **Off Plan**: #FF9800 (warning orange)
  - **Content Padding**: 16px
  - **Price**: 20px bold, primary color
  - **Title**: 16px semibold, max 2 lines
  - **Location**: 14px gray, with location icon
  - **Features**: Horizontal flex với icons
    - Bed icon + count
    - Bath icon + count  
    - SquareFoot icon + sqft
  - **Hover Effects**: 
    - translateY(-4px)
    - Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
    - Smooth transition 0.2s
  - **Click**: Navigate to property detail page

## Wireframe (Updated)
[Header Navigation]
[Hero Section với Background Image]
[Search Card (floating)]
[Featured Properties Grid]
[Footer]

## Color Palette (Updated)
- **Primary**: #1A237E (thay đổi từ #1D4F91)
- **Secondary**: #FF5252 (màu đỏ)
- **Background**: #FAFAFA (gray-50)
- **Text Primary**: #212121 (gray-900)
- **Text Secondary**: #757575 (gray-600)
- **Border Radius**: 8px (thay đổi từ 24px)

## Components Implemented
1. **Header**: Navigation links với active state
2. **HeroSearch**: Hero section + floating search card
3. **PropertyGrid**: Grid layout với 12 property cards
4. **Footer**: 4 cột với social links

## Technical Updates
- Theme updated với color palette mới
- Components redesigned theo HTML reference
- Simplified layout, loại bỏ Popular Searches, Featured Projects carousel, Explore by Area
- Focus vào core functionality: Search + Property Grid


## Sample Property Data
```json
{
  "properties": [
    {
      "id": 1,
      "title": "3 Bedroom Apartment in Dubai Marina",
      "location": "Dubai Marina, Dubai",
      "price": "AED 2,500,000",
      "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      "badge": "Featured",
      "beds": 3,
      "baths": 3,
      "sqft": "1,500"
    }
  ],
  "search": {
    "activeTab": "Buy",
    "query": "",
    "filters": ["Property Type", "Price", "Beds & Baths", "Area (sqft)", "More Filters"]
  }
}
```

## Implementation Status

✅ **Completed Components:**
- **Header**: Navigation links với active states và hover effects
- **Hero Section**: Background image với overlay và typography
- **Search Component**: Floating card với tabs, input, và filter chips
- **Property Grid**: 12 property cards với real data và hover animations
- **Footer**: 4-column layout với social links

✅ **Design System:**
- **Color Palette**: Primary #1A237E, Secondary #FF5252, comprehensive gray scale
- **Typography**: Inter font family với defined scale (36px hero, 24px headings, etc.)
- **Spacing**: Consistent 8px grid system
- **Border Radius**: 8px for cards/buttons, 100px for chips
- **Shadows**: 3-tier system (sm, md, lg) với proper opacity
- **Hover Effects**: translateY(-4px) với shadow transitions

✅ **Interactive Elements:**
- **Navigation**: Active states với border indicators
- **Search Tabs**: Click switching với visual feedback
- **Filter Chips**: Hover states với color transitions
- **Property Cards**: Hover animations với shadow changes
- **Buttons**: Consistent styling với hover effects

🔄 **In Progress:**
- Navigation routing implementation
- Search functionality backend integration
- Filter system modal development

⏳ **Planned Features:**
- Property detail pages
- Agent directory
- User authentication system
- Advanced search filters
- Mobile responsive design
- Map integration
- Favorites system

## Navigation Links Behavior

### 1. Buy (Current Page)
- **State**: Active với 3px bottom border
- **Content**: Properties for sale
- **Search tabs**: Buy tab active by default
- **Filters**: Price range, property type, beds/baths, area

### 2. Rent (/rent)
- **Action**: Navigate to rent page
- **Content**: Properties for rent
- **Search tabs**: Rent tab active
- **Filters**: Monthly rent, furnished/unfurnished, lease terms
- **Layout**: Similar grid với rental-specific badges

### 3. Commercial (/commercial)
- **Action**: Navigate to commercial page
- **Content**: Commercial properties (offices, retail, warehouses)
- **Search tabs**: Commercial tab active
- **Filters**: Property type, area size, parking, amenities
- **Cards**: Different layout cho commercial properties

### 4. New Projects (/new-projects)
- **Action**: Navigate to new projects page
- **Content**: Off-plan developments và new launches
- **Search tabs**: New Projects tab active
- **Filters**: Completion date, developer, payment plan
- **Cards**: Project-focused với completion timeline

### 5. Find Agent (/find-agent)
- **Action**: Navigate to agent directory
- **Content**: Real estate agent profiles
- **Layout**: Agent cards với photo, rating, specialization
- **Filters**: Location, language, experience, rating
- **Features**: Contact buttons, profile views

## Interactive Elements

### Search Functionality
- **Auto-complete**: Location suggestions khi typing
- **Recent searches**: Dropdown với recent queries
- **Quick filters**: Popular search combinations
- **Map integration**: Toggle map view (future)

### Property Cards
- **Favorite button**: Heart icon (top-right)
- **Share button**: Social sharing options
- **Contact agent**: Quick contact form
- **Virtual tour**: 360° view button (if available)
- **Image gallery**: Click để xem more photos

### Filter System
- **Property Type**: Dropdown với checkboxes
- **Price Range**: Dual slider với min/max inputs
- **Beds & Baths**: Counter buttons (+/-)
- **Area**: Slider với sqft range
- **More Filters**: Modal với advanced options
  - Amenities (pool, gym, parking)
  - Building age
  - Floor level
  - Furnishing status

## Next Steps (Implementation)
- **Phase 1**: Add React Router cho navigation
- **Phase 2**: Implement search API integration
- **Phase 3**: Add property detail pages
- **Phase 4**: Mobile responsive design
- **Phase 5**: Advanced filters và map view
- **Phase 6**: User authentication và favorites
- **Phase 7**: Agent contact system
