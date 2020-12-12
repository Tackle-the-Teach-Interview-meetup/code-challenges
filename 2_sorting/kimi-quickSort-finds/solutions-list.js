//https://www.interviewbit.com/tutorial/quicksort-algorithm/

// Java made into JS program for implementation of QuickSort
// class QuickSort
// {
	/* This function takes last element as pivot,
	places the pivot element at its correct
	position in sorted array, and places all
	smaller (smaller than pivot) to left of
	pivot and all greater elements to right
	of pivot */


    let arr = [];

    function partition(arr, low, high) {
        var pivot = arr[high];
        console.log(arr[high])
        var i = (low - 1); //index of smaller Element;

        for (var j=low; j < high; j++) {

            if(arr[j] <= pivot) {
                i++;

                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }

        temp = arr[i+1];
        arr[i+1] = arr[high];
        arr[high] = temp;

        return i + 1;

    }

   partition([1,3,2,6]);

    //refactor to js

  /* The main function that implements QuickSort()
	arr[] --> Array to be sorted,
	low --> Starting index,
	high --> Ending index */

  function sort( arr, low, high)
	{
		if (low < high)
		{
/* partitionIndex is partitioning index, arr[partitionIndex] is
			now at right place */

			let partitionIndex = partition(arr, low, high);

			// Recursively sort elements before
			// partition and after partition
			sort(arr, low, partitionIndex - 1);
			sort(arr, partitionIndex + 1, high);
		}
  }

