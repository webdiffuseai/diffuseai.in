import React from 'react';

interface PixelCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  variant?: 'light' | 'dark' | 'blue';
  className?: string;
  children?: React.ReactNode;
}

const variantStyles = {
  light: {
    backgroundColor: '#f0f0f0',
    borderColor: '#000',
    boxShadowColor: '#000',
    color: '#000',
  },
  dark: {
    backgroundColor: '#222',
    borderColor: '#fff',
    boxShadowColor: '#fff',
    color: '#fff',
  },
  blue: {
    backgroundColor: '#d0e7ff',
    borderColor: '#0047ab',
    boxShadowColor: '#003580',
    color: '#003580',
  },
};

const PixelCard: React.FC<PixelCardProps> = ({
  title,
  description,
  imageUrl,
  variant = 'light',
  className = '',
  children,
}) => {
  const styles = variantStyles[variant];

  return (
    <div
      className={className}
      style={{
        border: `2px solid ${styles.borderColor}`,
        padding: 16,
        width: 200,
        fontFamily: "'Pixel Emulator', monospace",
        backgroundColor: styles.backgroundColor,
        boxShadow: `4px 4px 0 ${styles.boxShadowColor}`,
        borderRadius: 4,
        color: styles.color,
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '100%',
            height: 'auto',
            marginBottom: 12,
            imageRendering: 'pixelated',
          }}
        />
      )}
      <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>
      {description && <p style={{ margin: 0 }}>{description}</p>}
      {children}
    </div>
  );
};

export default PixelCard;
