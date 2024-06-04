<script type="ts">
  import DungannonToBelfast from '$lib/assets/dungannon_to_belfast.png?enhanced';
  import BelfastToCastlerock from '$lib/assets/belfast_to_castlerock.png?enhanced';
  import DerryToDungannon from '$lib/assets/derry_to_dungannon.png?enhanced';
</script>

<article>
  <header><h2>Transport</h2></header>

  <h3>From Dungannon to Castlerock, 15th June</h3>

  <div class="timetable-images">
    <div class="image-and-link">
      <enhanced:img src={DungannonToBelfast} alt="Dungannon to Belfast" />
      <a
        href="https://www.translink.co.uk/JourneyPlanner?OriginId=10000564&OriginName=Dungannon%2C%20Dungannon%20Bus%20Station&OriginType=Bus%20stop&DestinationId=10000566&DestinationName=Belfast%2C%20Europa%20Buscentre&DestinationType=Bus%20stop&DepartureOrArrivalDate=2024-06-15%2008:30&isSearchByDepartureDate=true&FindBusDepartures=true&FindTrainDepartures=true&HasStepFreeEnabled=false"
        >Link</a
      >
    </div>
    <div class="image-and-link">
      <enhanced:img src={BelfastToCastlerock} alt="Belfast to Castlerock" />
      <a
        href="https://www.translink.co.uk/JourneyPlanner?OriginId=10000011&OriginName=Belfast%2C%20Lanyon%20Place%20Train%20Station&OriginType=Train%20stop&DestinationId=10000019&DestinationName=Castlerock%2C%20Castlerock%20Train%20Station&DestinationType=Train%20stop&DepartureOrArrivalDate=2024-06-15%2010:00&isSearchByDepartureDate=true&FindBusDepartures=true&FindTrainDepartures=true&HasStepFreeEnabled=false"
        >Link</a
      >
    </div>
  </div>

  <h3>From Derry to Dungannon, 16th June</h3>

  <div class="timetable-images">
    <div class="image-and-link">
      <enhanced:img src={DerryToDungannon} alt="Derry to Dungannon" />
      <a
        href="https://www.translink.co.uk/JourneyPlanner?OriginId=10008385&OriginName=Derry%20Londonderry%2C%20Victoria%20Park&OriginType=Bus%20stop&DestinationId=suburbID%3A31400071%3A390%3ADungannon%3A679556%3A137700%3AITMR&DestinationName=Dungannon&DestinationType=suburb&DepartureOrArrivalDate=2024-06-16%2017:30&isSearchByDepartureDate=true&FindBusDepartures=true&FindTrainDepartures=true&HasStepFreeEnabled=false"
        >Link</a
      >
    </div>
  </div>
</article>

<style>
  .timetable-images {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .image-and-link {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  img {
    width: var(--size);
    height: auto;
  }
</style>
