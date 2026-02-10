// Fix: Added React import to resolve namespace issues for React.ReactNode
import React from 'react';

export interface Testimonial {
  id: number;
  parentName: string;
  comment: string;
  rating: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Curriculum {
  name: string;
  flag: string;
}