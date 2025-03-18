import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ReusableButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loadingColor?: string;
  accessibilityLabel?: string;
  testID?: string;
}

const Button: React.FC<ReusableButtonProps> = ({
  title,
  onPress,
  isLoading = false,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  style,
  textStyle,
  loadingColor,
  accessibilityLabel,
  testID,
}) => {
  // Determine styles based on variant
  const getVariantStyles = (): { container: ViewStyle; text: TextStyle } => {
    switch (variant) {
      case 'secondary':
        return {
          container: {
            backgroundColor: '#333333',
            borderColor: '#555555',
          },
          text: {
            color: '#FFFFFF',
          },
        };
      case 'outline':
        return {
          container: {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: '#4CAF50',
          },
          text: {
            color: '#4CAF50',
          },
        };
      case 'text':
        return {
          container: {
            backgroundColor: 'transparent',
            borderWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
          text: {
            color: '#4CAF50',
          },
        };
      case 'primary':
      default:
        return {
          container: {
            backgroundColor: '#4CAF50',
            borderColor: '#4CAF50',
          },
          text: {
            color: '#FFFFFF',
          },
        };
    }
  };

  // Determine styles based on size
  const getSizeStyles = (): { container: ViewStyle; text: TextStyle } => {
    switch (size) {
      case 'small':
        return {
          container: {
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 40,
          },
          text: {
            fontSize: 14,
          },
        };
      case 'large':
        return {
          container: {
            paddingVertical: 18,
            paddingHorizontal: 32,
            borderRadius: 50,
          },
          text: {
            fontSize: 20,
          },
        };
      case 'medium':
      default:
        return {
          container: {
            paddingVertical: 16,
            paddingHorizontal: 24,
            borderRadius: 50,
          },
          text: {
            fontSize: 18,
          },
        };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const containerStyles = [
    styles.button,
    variantStyles.container,
    sizeStyles.container,
    fullWidth && styles.fullWidth,
    (disabled || isLoading) && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.buttonText,
    variantStyles.text,
    sizeStyles.text,
    (disabled || isLoading) && styles.disabledText,
    textStyle,
  ];

  // Determine proper loading color based on variant if not specified
  const defaultLoadingColor =
    loadingColor || (variant === 'outline' || variant === 'text' ? '#4CAF50' : '#FFFFFF');

  return (
    <TouchableOpacity
      style={containerStyles}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.8}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || isLoading, busy: isLoading }}
      testID={testID}>
      {isLoading ? (
        <ActivityIndicator size="small" color={defaultLoadingColor} />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
    elevation: 0,
  },
  disabledText: {
    opacity: 0.8,
  },
});

export default Button;
