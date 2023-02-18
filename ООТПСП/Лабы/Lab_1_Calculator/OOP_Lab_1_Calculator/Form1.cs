using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace OOP_Lab_1_Calculator
{
    public partial class Form1 : Form
    {
        public Calculator calculator = new Calculator();
        public Form1()
        {
            InitializeComponent();

            buttonCalculateShoes.Click += buttonCalculateShoes_Click;
            buttonClearShoes.Click += buttonClearShoes_Click;
            buttonCalculateClothes.Click += buttonCalculateClothes_Click;
            buttonClearClothes.Click += buttonClearClothes_Click;
        }

        private void buttonCalculateClothes_Click(object sender, EventArgs e)
        {
            try
            {
                float girth = (float)Convert.ToDouble(textBoxChestGirth.Text);
                float  waist = (float)Convert.ToDouble(textBoxWaistCircumference.Text);
                if(girth <= 0 || waist <= 0) throw new Exception(message: "Неверно введены данные");
                float[] sizes;
                if(radioButtonMan.Checked)
                {
                     sizes = calculator.CalculateClothesMan(girth, waist);
                }
                else if(radioButtonWoman.Checked)
                {
                     sizes = calculator.CalculateClothesWoman(girth, waist);
                }
                else
                {
                    throw new Exception(message: "Не указан пол");
                }
                labelRussiaClothSize.Text = Convert.ToString(sizes[0]);
                labelUSAClothSize.Text = Convert.ToString(sizes[1]);
                labelUKClothSize.Text = Convert.ToString(sizes[2]);
                labelEuropeClothSize.Text = Convert.ToString(sizes[3]);
                if (sizes[2] < 0) throw new Exception(message: "Слишком маленький размер");
            }
            catch (Exception error)
            {
                MessageBox.Show(error.Message);
                throw;
            }
        }

        private void buttonCalculateShoes_Click(object? sender, EventArgs e)
        {
            try
            {
                float dimension = (float)Convert.ToDouble(textBoxInputFootSize.Text);
                if (dimension <= 0 ) throw new Exception(message: "Неверно введены данные");
                float[] sizes = calculator.CalculateShoes(dimension);
                labelRussiaEuropeOut.Text = Convert.ToString(sizes[0]);
                labelUSAShoes.Text = Convert.ToString(sizes[1]);
                labelUKShoes.Text = Convert.ToString(sizes[2]);
                if(sizes[2] < 0) throw new Exception(message:"Слишком маленький размер");
            }
            catch (Exception error)
            {
                MessageBox.Show(error.Message);
            }
            
        }

        private void buttonClearShoes_Click(object? sender, EventArgs e)
        {
            labelRussiaEuropeOut.Text = "";
            labelUSAShoes.Text = "";
            labelUKShoes.Text = "";
            textBoxInputFootSize.Text = "";
        }

        private void buttonClearClothes_Click(object? sender, EventArgs e)
        {
            radioButtonMan.Checked = false;
            radioButtonWoman.Checked = false;
            textBoxChestGirth.Text = "";
            textBoxWaistCircumference.Text = "";
            labelRussiaClothSize.Text = "";
            labelUSAClothSize.Text = "";
            labelUKClothSize.Text = "";
            labelEuropeClothSize.Text = "";
           
        }

    }
}
