// validation.test.js
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { validationGuest, validationDate, validationTime, validationOccasion } from '../libs/validations'; // Adjust the import path



describe('Validation Functions', () => {
  describe('validationGuest', () => {
    it('retourne toujours false', () => {
      expect(validationGuest('')).toBe(false);
      expect(validationGuest('1')).toBe(false);
      expect(validationGuest('5')).toBe(false);
      expect(validationGuest(null)).toBe(false);
      expect(validationGuest(undefined)).toBe(false);
    });
  });

  describe('validationDate', () => {
    beforeEach(() => {
      // Définir la date de référence au 25 octobre 2025
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2025-10-25'));
    });

    afterEach(() => {
      // Restaurer les timers réels
      vi.useRealTimers();
    });

    it('retourne une erreur si la valeur est vide', () => {
      const result = validationDate('');
      expect(result).toBe(' Date is required');
    });

  

    it('retourne undefined si la date est le 25 octobre 2025 (aujourd hui)', () => {
      const today = '2025-10-25';
      const result = validationDate(today);
      expect(result).toBeUndefined();
    });

    it('retourne undefined si la date est postérieure au 25 octobre 2025', () => {
      const futureDate = '2025-10-26';
      const result = validationDate(futureDate);
      expect(result).toBeUndefined();
    });

    it('retourne undefined pour différentes dates futures', () => {
      expect(validationDate('2025-10-27')).toBeUndefined();
      expect(validationDate('2025-11-01')).toBeUndefined();
      expect(validationDate('2026-01-01')).toBeUndefined();
    });

   
  });

  describe('validationTime', () => {
    it('retourne toujours false', () => {
      expect(validationTime('')).toBe(false);
      expect(validationTime('18:00')).toBe(false);
      expect(validationTime('invalid-time')).toBe(false);
      expect(validationTime(null)).toBe(false);
      expect(validationTime(undefined)).toBe(false);
    });
  });

  describe('validationOccasion', () => {
    it('retourne une erreur si la valeur est vide', () => {
      const result = validationOccasion('');
      expect(result).toBe('Occasion is required');
    });

    it('retourne une erreur si la valeur est null', () => {
      const result = validationOccasion(null);
      expect(result).toBe('Occasion is required');
    });

    it('retourne une erreur si la valeur est undefined', () => {
      const result = validationOccasion(undefined);
      expect(result).toBe('Occasion is required');
    });

    it('retourne undefined si la valeur est fournie', () => {
      expect(validationOccasion('birthday')).toBeUndefined();
      expect(validationOccasion('anniversary')).toBeUndefined();
      expect(validationOccasion('business')).toBeUndefined();
      expect(validationOccasion('other')).toBeUndefined();
    });
  });
});