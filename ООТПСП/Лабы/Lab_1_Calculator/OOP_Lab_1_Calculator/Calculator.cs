using System;
using System.Collections.Generic;
using System.Text;

namespace OOP_Lab_1_Calculator
{
    public interface ICalculator
    {
        float[] CalculateShoes(float dimension);

        float[] CalculateClothesMan(float girthDimension, float waistcircumference);

        float[] CalculateClothesWoman(float girthDimension, float waistcircumference);
    }

    public class Calculator : ICalculator
    {
        public float[] CalculateShoes(float dimension)
        {
            float[] sizes = new float[3];
            sizes[0] = 38.0f + ((dimension-24.0f));
            sizes[1] = 6.0f + ((dimension - 24.0f));
            sizes[2] = 5.0f + ((dimension - 24.0f));
            return sizes;
          
        }

        public float[] CalculateClothesMan(float girthDimension, float waistcircumference)
        {
            float[] sizes = new float[4];
            sizes[0] = ((int)(44.0f + (girthDimension - 42.0f))) > ((int)(44.0f +(waistcircumference - 27.0f))) ? (int)(44.0f + (girthDimension - 42.0f)) : (int)(44.0f + (waistcircumference - 27.0f));
            sizes[3] = sizes[0] - 12;
            sizes[2] = sizes[0] - 10;
            sizes[1] = sizes[3];
            return sizes;
        }

        public float[] CalculateClothesWoman(float girthDimension, float waistcircumference)
        {
            float[] sizes = new float[4];
            sizes[0] = ((int)(44.0f + (girthDimension - 46.0f))) > ((int)(44.0f + (waistcircumference - 31.0f))) ? (int)(44.0f + (girthDimension - 46.0f)) : (int)(44.0f + (waistcircumference - 31.0f));
            sizes[3] = sizes[0] - 12;
            sizes[2] = sizes[0] - 10;
            sizes[1] = sizes[3];
            return sizes;
        }
    }
}
