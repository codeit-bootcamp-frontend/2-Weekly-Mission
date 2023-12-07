// FolderBlock.tsx
export interface FolderBlockProps {
	children: string;
	id?: number;
	$isActive: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

// GradationButton.tsx
export interface GradationButtonProps {
	children: string;
	width?: string;
}

// SearchBar.tsx
export interface SearchBarProps {
	$width?: string;
	$height?: string;
	$inputWidth?: string;
	$fontSize?: string;
	$fontColor?: string;
	$borderColor?: string;
	$backgroundColor?: string;
	$placeholder?: string;
	$placeholderColor?: string;
	$iconSrc?: string;
	$iconAlt?: string;
	$iconWidth?: string;
	$iconHeight?: string;
}

// Card.tsx
export interface CardProps {
	link: Link;
}

// FolderCard.tsx
export interface FolderCardProps {
	link: FolderLink;
}

// Header.tsx
export interface HeaderProps {
	email: string | undefined;
	profileImageSource: string | undefined;
}

// ProfileSection.tsx
export interface User {
	id: number;
	name: string;
	email: string;
	profileImageSource: string;
}

// ListSection.tsx
export interface Link {
	createdAt: string;
	description: string;
	id: number;
	imageSource: string;
	title: string;
	url: string;
}

// FolderListSection.tsx
export interface FolderLink {
	created_at: string;
	description: string | null;
	folder_id: string | null;
	id: number;
	image_source: string | null;
	title: string | null;
	updated_at: string | null;
	url: string;
}

export interface Owner {
	id: number;
	name: string;
	profileImageSource: string;
}

export interface MyFolder {
	count: number;
	id: number;
	links: Link[];
	name: string;
	owner: Owner;
}

export interface Tag {
	createdAt: string;
	id: number;
	link: { count: number };
	name: string;
	user_id: number;
}
