import test from 'node:test';
import assert from 'node:assert/strict';
import { buildEnquiryMailto, validateContactForm } from './contactForm';
import { business, gallery, products } from '../config/business';

test('validateContactForm rejects empty or invalid fields', () => {
  const errors = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    phone: '',
    message: 'Hi',
  });
  assert.equal(errors.name, 'Please enter your name.');
  assert.equal(errors.email, 'Please enter a valid email address.');
  assert.equal(errors.message, 'Please write at least 10 characters.');
});

test('validateContactForm accepts valid enquiry fields', () => {
  const errors = validateContactForm({
    name: 'Alice Baker',
    email: 'alice@example.co.uk',
    phone: '020 7799 4999',
    message: 'Hello, do you take cake pre-orders for Friday?',
  });
  assert.deepEqual(errors, {});
});

test('buildEnquiryMailto formats subject and body cleanly', () => {
  const url = buildEnquiryMailto('info@quartergroup.co.uk', {
    name: 'Alice',
    email: 'alice@example.com',
    phone: '',
    message: 'Enquiry about sourdough loaves.',
  });
  assert.ok(url.startsWith('mailto:info@quartergroup.co.uk?subject='));
  assert.ok(url.includes('Website%20enquiry%20from%20Alice'));
  assert.ok(url.includes('Phone%3A%20-'));
});

test('business products and gallery items have valid required fields and unique product photos', () => {
  assert.equal(products.length, 12);
  assert.equal(gallery.length, 6);
  assert.ok(business.name.length > 0);

  const productImages = new Set<string>();
  for (const p of products) {
    assert.ok(p.id && p.name && p.description && p.art && p.alt);
    assert.ok(p.image.startsWith('/images/'), `Expected local /images/ path for ${p.id}`);
    productImages.add(p.image);
  }
  assert.equal(productImages.size, products.length, 'Each product card must use a distinct photo');

  for (const g of gallery) {
    assert.ok(g.label && g.art && g.alt);
    assert.ok(g.image.startsWith('/images/'), `Expected local /images/ path for ${g.label}`);
  }
});
